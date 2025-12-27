import React from "react";
import { heroStyles } from "../assets/dummyStyles";
function Hero() {
  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.bgElement1}></div>
      <div className={heroStyles.bgElement2}></div>
      <div className={heroStyles.bgElement3}></div>
      <div className={heroStyles.gridPattern}></div>
      <div className={heroStyles.container}>
        <div className={heroStyles.grid}>
          <div className={heroStyles.content}>
            <div className={heroStyles.contentInner}>
              <div className={heroStyles.badge}>
                <div className={heroStyles.badgeDot}></div>
                <span className={heroStyles.badgeText}>
                  AI- POWERED INVOICE PLATFORM
                </span>
              </div>
              {/* main heading */}
              <h1 className={heroStyles.heading}>
                <span className={heroStyles.headingLine1}>Proffessional</span>
                <br />
               <span className={heroStyles.headingLine2}>Invoices</span>
               <br />
               <span className={heroStyles.headingLine3}>in Seconds</span>
              </h1>
              <p className={heroStyles.description}>
                Transform conversations into professional invoices with AI.{" "}
                <span className={heroStyles.descriptionHighlight}>
                  Paste any text
                </span>{" "}
                and watch AI extract items, calculate totals, and generate
                ready-to-send invoices instantly.
              </p>
            </div>
            {/*CTA BUTTONS */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
