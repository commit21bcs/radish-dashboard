// RADISH Dashboard Data - Auto-generated from radish.db
// Last updated: 2026-01-28

const RADISH_DATA = {
  tickets: [
    {"id":17,"ticket_id":"598559","title":"Yield displaying bushels/ha instead of Tonnes/ha in new icon parameters for Combine Map Options","description":"Australian users see yield displayed as bushels/ac or bushels/ha instead of Tonnes/ha when their system is set to metric.","status":"Resolved","trs_score":300,"filed_date":"2025-03-03","resolved_date":"2025-04-05","days_to_resolve":33,"application":"Farm","functionality":"Yield Data","primary_category":6,"category_name":"Human Presentation & Interpretation Errors","secondary_category":null},
    {"id":18,"ticket_id":"639745","title":"Incorrect sugarcane yield values - too high (Parent)","description":"Sugarcane yield values in FieldOps are massively incorrect compared to machine monitors after scale calibration.","status":"Resolved","trs_score":1000,"filed_date":"2025-07-16","resolved_date":"2025-08-28","days_to_resolve":43,"application":"Farm","functionality":"Data Processing","primary_category":5,"category_name":"Sync, Persistence & Lineage Errors","secondary_category":null},
    {"id":19,"ticket_id":"642214","title":"FieldOps | Unbound harvest layers missing from incremental files","description":"Incremental files processed successfully but unbound harvest layers not visible in FieldOps. Layers visible in Farmworks.","status":"Resolved","trs_score":1000,"filed_date":"2025-07-24","resolved_date":"2025-08-29","days_to_resolve":36,"application":"Farm","functionality":"Yield Data","primary_category":5,"category_name":"Sync, Persistence & Lineage Errors","secondary_category":null},
    {"id":20,"ticket_id":"643566","title":"FieldOps | High Yield Blue Streak in data visualization","description":"Yield data displaying a solid blue line (high yield streak) when data should not be displayed.","status":"Resolved","trs_score":750,"filed_date":"2025-07-30","resolved_date":"2025-09-17","days_to_resolve":49,"application":"Farm","functionality":"Yield Data","primary_category":3,"category_name":"Data Contextualization Errors","secondary_category":null},
    {"id":21,"ticket_id":"644589","title":"FieldOps | Really high yield values compared to FRED display values","description":"Yield data on display does not match FieldOps. Massive discrepancies (5-7x) between systems.","status":"Monitor","trs_score":1000,"filed_date":"2025-08-11","resolved_date":"2026-01-14","days_to_resolve":156,"application":"Farm","functionality":"Yield Data","primary_category":4,"category_name":"Incorrect Transformation & Business Logic","secondary_category":null},
    {"id":22,"ticket_id":"646278","title":"FieldOps | High Yield Area From Curved - Blue streak | Cundiff Farms","description":"Yield layer showing blue streaks (high yield artifacts) for multiple fields. Duplicate data was ingested.","status":"Resolved","trs_score":750,"filed_date":"2025-08-21","resolved_date":"2025-09-04","days_to_resolve":14,"application":"Farm","functionality":"Yield Data","primary_category":5,"category_name":"Sync, Persistence & Lineage Errors","secondary_category":null},
    {"id":23,"ticket_id":"637632","title":"FieldOps | High Yield Area From Random Machine Pass - Blue Streaks","description":"Extra strip of data visible indicating high yield area from random machine passes.","status":"Action Complete","trs_score":750,"filed_date":null,"resolved_date":"2025-08-27","days_to_resolve":null,"application":"FieldOps","functionality":"Yield Data","primary_category":3,"category_name":"Data Contextualization Errors","secondary_category":4},
    {"id":24,"ticket_id":"646379","title":"FieldOps | Blue Streak High Yield Pass","description":"Yield layer showing blue streaks for fields due to incorrect file connection logic.","status":"Resolved","trs_score":null,"filed_date":null,"resolved_date":null,"days_to_resolve":null,"application":"FieldOps","functionality":"Yield Data","primary_category":4,"category_name":"Incorrect Transformation & Business Logic","secondary_category":5},
    {"id":25,"ticket_id":"657912","title":"Package cn1 files feature in Case RI FieldOps does not work as intended","description":"Package cn1 files feature only includes one task file when multiple exist.","status":"Action Complete","trs_score":null,"filed_date":null,"resolved_date":null,"days_to_resolve":null,"application":"Case RI FieldOps","functionality":"Package Files","primary_category":4,"category_name":"Incorrect Transformation & Business Logic","secondary_category":5},
    {"id":26,"ticket_id":"666227","title":"FieldOps | Yield data not matching with summary data from the display","description":"Mismatch of field size, yield total and yield moisture average values between display and FieldOps.","status":"Active","trs_score":null,"filed_date":"2021-11-29","resolved_date":null,"days_to_resolve":null,"application":"FieldOps","functionality":"Yield Data","primary_category":4,"category_name":"Incorrect Transformation & Business Logic","secondary_category":3},
    {"id":27,"ticket_id":"669597","title":"FieldOps | Yield data not matching with display's data","description":"Systematic discrepancies between FieldOps and display systems with calibration issues.","status":"Resolved","trs_score":null,"filed_date":null,"resolved_date":null,"days_to_resolve":null,"application":"FieldOps","functionality":"Yield Data","primary_category":4,"category_name":"Incorrect Transformation & Business Logic","secondary_category":5},
    {"id":28,"ticket_id":"CTS152","title":"FieldOps | Incorrect Variety Dry yield shows the Wet Yield (Forage Harvester)","description":"Dry yield layers incorrectly showing wet yield data for forage harvester.","status":"Active","trs_score":null,"filed_date":null,"resolved_date":null,"days_to_resolve":null,"application":"FieldOps","functionality":"Yield Data","primary_category":3,"category_name":"Data Contextualization Errors","secondary_category":4}
  ],

  categories: [
    {"id":1,"name":"Reality Measurement Errors","short":"R","question":"Was the physical phenomenon measured correctly at the source?","color":"#ef4444"},
    {"id":2,"name":"Acquisition & Interpretation Errors","short":"A","question":"Did embedded systems correctly acquire, read and interpret the raw signal?","color":"#f97316"},
    {"id":3,"name":"Data Contextualization Errors","short":"D","question":"Was the data correctly contextualized in time, space, and machine state?","color":"#eab308"},
    {"id":4,"name":"Incorrect Transformation & Business Logic","short":"I","question":"Were calculations and derivations applied correctly?","color":"#22c55e"},
    {"id":5,"name":"Sync, Persistence & Lineage Errors","short":"S","question":"Was the correct version of data stored, merged, and retrieved?","color":"#3b82f6"},
    {"id":6,"name":"Human Presentation & Interpretation Errors","short":"H","question":"Was the data shown correctly or consumed correctly by humans?","color":"#8b5cf6"}
  ],

  actionPatterns: [
    {"id":1,"name":"Prevention","description":"Design-time or build-time changes that eliminate the possibility of this error"},
    {"id":2,"name":"Detection","description":"Automated mechanisms that surface anomalies quickly"},
    {"id":3,"name":"Investigation","description":"Tooling and workflow improvements for faster root cause analysis"},
    {"id":4,"name":"Governance","description":"Structural controls defining ownership, rules, and decision rights"},
    {"id":5,"name":"Customer Communication","description":"Actions to correct defects and restore customer trust"},
    {"id":6,"name":"Standardization","description":"Shared patterns and conventions to reduce variance across systems"},
    {"id":7,"name":"Education & Enablement","description":"Improving understanding across teams and users"}
  ],

  // Similar ticket clusters (from vector similarity)
  clusters: [
    {
      name: "Blue Streak / High Yield Artifacts",
      tickets: ["643566", "646278", "637632", "646379"],
      description: "Visual artifacts showing erroneous high yield streaks in map visualizations"
    },
    {
      name: "Display vs FieldOps Mismatch",
      tickets: ["644589", "666227", "669597"],
      description: "Systematic discrepancies in yield values between display and cloud systems"
    },
    {
      name: "Data Sync & Processing Issues",
      tickets: ["639745", "642214"],
      description: "Issues with data synchronization and layer persistence across systems"
    }
  ],

  // Recommended actions based on analysis
  recommendations: [
    {
      action: "Standardization",
      priority: "High",
      rationale: "5 of 12 tickets stem from different yield calculation methods across systems. Implement single source of truth for yield formulas.",
      categories: [4]
    },
    {
      action: "Prevention",
      priority: "High",
      rationale: "Add contract tests between Display → CN1 → FieldOps pipelines to catch formula mismatches before release.",
      categories: [4, 5]
    },
    {
      action: "Detection",
      priority: "Medium",
      rationale: "Implement automated alerts when yield values differ >5% between systems for the same field.",
      categories: [4, 5, 6]
    },
    {
      action: "Governance",
      priority: "Medium",
      rationale: "Define canonical owner for yield calculation logic and work state classification rules.",
      categories: [3, 4]
    }
  ],

  metadata: {
    lastUpdated: "2026-01-28",
    totalTickets: 12,
    analyzedBy: "RADISH Framework v1.0"
  }
};
