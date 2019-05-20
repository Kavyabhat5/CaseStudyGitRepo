using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaseStudyBusinessLogic
{
    class CaseException:ApplicationException
    {
        public CaseException() : base()
        {

        }

        public CaseException(string message) : base(message)
        {

        }

        public CaseException(string message, Exception inner) : base()
        {

        }

    }
}
