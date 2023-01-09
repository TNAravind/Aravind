using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleFrameworksApp.FirstAssessment
{
    class Disease
    {
        public string DiseaseName { get; set; }
        public string Severity { get; set; }
        public ArrayList Symptoms { get; set; }
        public string Description { get; set; }
        public string Causes { get; set; }

    }

    enum Cause
    {
        ExternalFactors = 1, InternalDisorder
    }

    class DoctorApp : Disease
    {
        ArrayList contents = new ArrayList();
        internal ArrayList AddDiseaseDetails(Disease disease)
        {
            if (disease is Disease)
            {
                contents.Add(disease);
                return contents;
            }
            throw new Exception("Enter the disease appropriately");
        }

        //internal bool CheckDisease(string disease)
        //{
            
            

        //}
        internal void AddSymptoms(Disease disease)
        {
            //Symptoms.Add(disease.symptom);
        }
        internal void CheckPatient(Disease disease)
        {

        }


    }

    class HelperFunctions
    {
        //DoctorApp call = new DoctorApp();

        private static DoctorApp obj = new DoctorApp();
        public void start()
        {
            Console.WriteLine("PRESS 1 TO ADD DISEASE DETAILS \nPRESS 2 TO ADD SYMPTOMS TO DISEASE \nPRESS 3 TO CHECK PATIENT ");
            string response = Console.ReadLine();
            switch (response)
            {
                case "1":
                    AddDisease();
                    break;
                case "2":
                    AddSymptom();
                    break;
                case "3":
                    PatientCheck();
                    break;
                default:
                    Console.WriteLine("Please enter the valid input");
                    break;
            }

        }
        public void AddDisease()
        {
            Console.WriteLine("Enter the name of the disease you want to add");
            string name = Console.ReadLine();

            Console.WriteLine("Enter the severity as 'high', 'medium' or 'low'");
            string severity = Console.ReadLine();

            Console.WriteLine("Enter the cause of the disease as 1 for external factors and 2 for internal factors");
            string causeinput = Console.ReadLine();

            Cause cause;
            if (causeinput == "1")
                cause = Cause.ExternalFactors;
            else
                cause = Cause.InternalDisorder;

            Console.WriteLine("Enter the description in not less than 30 letters");
            string description = Console.ReadLine();

            try
            {
                ArrayList output = obj.AddDiseaseDetails(new Disease { DiseaseName = name, Severity = severity, Causes = cause.ToString(), Description = description });
                foreach (Disease item in output)
                {
                    Console.WriteLine(item.DiseaseName);
                    Console.WriteLine(item.Severity);
                    Console.WriteLine(item.Causes);
                    Console.WriteLine(item.Description);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        public void AddSymptom()
        {
            Console.WriteLine("Enter the disease to which you want to add the symptom");
            string input = Console.ReadLine();
            //obj.CheckDisease(input);
        }

        public void PatientCheck()
        {
            Console.WriteLine("Enter the name of the patient");
            string input = Console.ReadLine();
            
        }


    }
    class UIMenu
    {
        static void Main(string[] args)
        {
            HelperFunctions run = new HelperFunctions();
            run.start();
        }
    }
}
