using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaseStudyBusinessLogic
{
    public class CategoryRepo
    {

        public List<WorkOut_Category> GetAll()
        {
            try
            {
                using (CaseStudySqlEntities objcontext = new CaseStudySqlEntities())
                {
                    var query = from obj in objcontext.WorkOut_Category
                                select obj;
                    return query.ToList();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public WorkOut_Category GetById(int Category_id)
        {
            try
            {
                using (CaseStudySqlEntities objcontext = new CaseStudySqlEntities())
                {
                    var query = (from obj in objcontext.WorkOut_Category
                                 where obj.Category_id == Category_id
                                 select obj).FirstOrDefault();
                    return query;
                }
            }
            catch (CaseException ex)
            {
                throw  ex;
            }
        }
        
    }
}


