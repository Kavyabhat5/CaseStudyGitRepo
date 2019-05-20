using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using CaseStudyBusinessLogic;
namespace CaseStudyTest.Tests
{
    [TestFixture]
    public class ListTest
    {
       

        [Test]
        public void GetAllTest()
        {
            var obj = new CategoryRepo();
            var actual= obj.GetAll().Count();
            var expected = 2;
            Assert.AreEqual(expected, actual);
        }
    }
}
