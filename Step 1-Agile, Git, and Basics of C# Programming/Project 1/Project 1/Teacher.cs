﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project_1
{
    class Teacher
    {
        public List<Teacher> Teachers { set; get; } = new List<Teacher>();
        public int ID { set; get; }
        public string Name { set; get; }
        public string[] Class_Sections { set; get; }

        public void copyTeacher(string[] data)
        {
            Teacher newTeacher = new Teacher();
            newTeacher.ID = Convert.ToInt32(data[0]);
            newTeacher.Name = data[1];
            newTeacher.Class_Sections = data[2].Split(' ');

            Teachers.Add(newTeacher);
        }

        public void addTeacher()
        {
            Boolean finish = false;
            while (!finish)
            {
                Teacher newTeacher = new Teacher();
                newTeacher.ID = Teachers.Count+1;
                Console.WriteLine("Enter Name:");
                newTeacher.Name = Console.ReadLine();
                Console.WriteLine("Enter Classes and Sections with space between them:");
                Console.WriteLine("Example (ICS_01 Math_08)");
                newTeacher.Class_Sections = Console.ReadLine().Split(' ');
                Teachers.Add(newTeacher);
                Console.WriteLine(" Add successful ...");
                Console.WriteLine("Do you want to add more: (Y-N)");
                string finished = Console.ReadLine().ToUpper().Trim();
                switch (finished)
                {
                    case "Y":
                        finish = false;
                        break;
                    case "N":
                        finish = true;
                        break;
                    default:
                        Console.WriteLine("Wrong choice...");
                        finish = true;
                        break;
                }
            }
            
            }

        public void UpdateTeacher()
        {
            Console.WriteLine("Enter the ID of the teacher:");
            int id = Convert.ToInt32(Console.ReadLine());
            SearchTeacher(id);

        }

        public void RetriveTeachersList()
        {
            foreach (var teacher in Teachers)
            {
               Console.WriteLine("----------------------------------------------------------------------------------------------------------------------");
               Console.Write($"| Id: {teacher.ID} | Name: {teacher.Name} | Class_Sections: ");
               foreach (var class_section in teacher.Class_Sections)
               {
                   Console.Write($" {class_section}");
               }
               Console.WriteLine("|\n----------------------------------------------------------------------------------------------------------------------");
            }
        }

        private Teacher SearchTeacher(int id)
        {
            return Teachers.Find(teacher => teacher.ID == id);
        }
    }
}
