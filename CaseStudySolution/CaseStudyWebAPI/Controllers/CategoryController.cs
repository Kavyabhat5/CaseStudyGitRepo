﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaseStudyBusinessLogic;
using CaseStudyWebAPI.Controllers;
namespace CaseStudyWebAPI.Controllers
{
    public class CategoryController : ApiController
    {
        CaseStudySqlEntities db = new CaseStudySqlEntities();
        public IHttpActionResult GetAll()
        {
            return Ok(db.WorkOut_Category.ToArray());
        }
        public IHttpActionResult Get(int Category_Id)
        {
            if (Category_Id < 0)
            {
                return BadRequest("Invalid SUPLNO  should be greater than 0");
            }

            var obj = db.WorkOut_Category.Find(Category_Id);
            if (obj == null)
            {
                return NotFound();
            }
            return Ok(obj);
        }
        public IHttpActionResult Post(WorkOut_Category obj)
        {
            db.WorkOut_Category.Add(obj);
            int NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("Failed to add suppliers");
            }

        }
        public IHttpActionResult Put(WorkOut_Category obj)
        {
            db.WorkOut_Category.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;
            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Failed to update suppliers");
            }
        }
        public IHttpActionResult Delete(int SUPLNO)
        {
            var obj = db.WorkOut_Category.Find(SUPLNO);
            if (obj == null)
            {
                return NotFound();
            }
            db.WorkOut_Category.Remove(obj);
            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("Failed to delete");
            }
        }
    }

}
