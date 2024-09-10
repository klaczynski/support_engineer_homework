const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");
const db = new sqlite3.Database("./smartrr.db", (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
  }
});
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

// ***********
// first report
//Display Optimization Settings:  Takes the value of a myShopifyDomain field as an input and returns their optimization settings.
app.post("/opsettingseport", (req, res) => {
  const { domainName } = req.body;
  const sql = `SELECT setup FROM org where myshopifydomain = ?`;
  db.all(sql, [domainName], (err, row) => {
    if (err) {
      console.log(err.message);
    }
    let test = JSON.parse(row[0].setup);
    res.send(test.optimization);
  });
});

//**************
// second report
// Loops through all organizations and shows the date they were created
// (DD/MM/YYYY), their status, and planName sorted by oldest to newest.
// not all orgs have a matching plan
/*select org.orgname, org.createddate, org.id, plan.organizationid, plan.planname, plan.status 
from org
inner join plan on org.id = plan.organizationid
order by org.createddate;
*/

app.get("/displayall", (req, res) => {
  const sql = `select org.orgname, org.createddate, org.id, plan.planname, plan.status from org inner join plan on org.id = plan.organizationid order by org.createddate`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    res.send(rows);
  });
});

//3rd report
//Returns the list of organizations whose status is cancelled.
/* select org.orgname, org.createddate, org.id, plan.planname, plan.status 
from org
inner join plan on org.id = plan.organizationid
where plan.status = "CANCELLED"
order by org.createddate
*/
app.get("/displaycancelled", (req, res) => {
  const sql = `select org.orgname, org.createddate, org.id, plan.planname, plan.status from org inner join plan on org.id = plan.organizationid where plan.status = "CANCELLED" order by org.createddate`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    res.send(rows);
  });
});

//4th report
//Takes the value of an orgName and returns the organization record in JSON format.
app.post("/displayorg", (req, res) => {
  const { orgname } = req.body;
  const sql = `select * from org where orgname = ?`;
  db.all(sql, [orgname], (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    //"in JSON format" - string or object?
    //let rowstr = JSON.stringify(rows);
    //res.send(rowstr);
    res.send(rows);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`started server ${port}`);
});
