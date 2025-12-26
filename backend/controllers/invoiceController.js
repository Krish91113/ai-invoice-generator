import mongoose from "mongoose";
import Invoice from "../models/invoiceModel.js";
import {getAuth} from '@clerk/express';

const API_BASE ='http://localhost:4000'

function computeTotals(items =[], taxPercent =0) {
    const safe = Array.isArray(items) ? items.filter(Boolean) : [];
    const subtotal = safe.reduce((sum, item) => sum + (Number(item.qty || 0) * Number(item.unitprice || 0)), 0);
    const tax = (subtotal * Number(taxPercent || 0)) / 100;
    const total = subtotal + tax;
    return { subtotal, tax, total };
}

//parse form data
function parseItemFields(val){
    if(!val) return [];
    if(Array.isArray(val)) return val;
    if(typeof val === 'string'){
        try{
            return JSON.parse(val);
        }catch(err){
            return [];
        }
    }
    return val;
}

// check if string is valid ObjectId
function isObjectIdString(id){
    return typeof id === 'string' && /^[0-9a-fA-F]{24}$/.test(id);
}

//for hepler functions
function uploadedFilesToUrls(req) {
  const urls = {};
  if (!req.files) return urls;
  const mapping = {
    logoName: "logoDataUrl",
    stampName: "stampDataUrl",
    signatureNameMeta: "signatureDataUrl",
    logo: "logoDataUrl",
    stamp: "stampDataUrl",
    signature: "signatureDataUrl",
  };
  Object.keys(mapping).forEach((field) => {
    const arr = req.files[field];
    if (Array.isArray(arr) && arr[0]) {
      const filename =
        arr[0].filename || (arr[0].path && path.basename(arr[0].path));
      if (filename) urls[mapping[field]] = `${API_BASE}/uploads/${filename}`;
    }
  });
  return urls;
}
