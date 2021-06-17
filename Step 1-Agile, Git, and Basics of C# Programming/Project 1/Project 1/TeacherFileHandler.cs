using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Project_1
{
    class TeacherFileHandler
    {
        public Teacher teacherObj = new Teacher();
        public void OpenFile(string file)
        {
            if (File.Exists(file))
            {
                List<string> lines = File.ReadAllLines(file).ToList();
                foreach (var line in lines)
                {
                    string[] data = line.Split(',');
                    teacherObj.copyTeacher(data);
                }
            }
            else
            {
                CreateFile(file);
            }
        }

        private void CreateFile(string file)
        {
            File.CreateText(file);
        }

        public void StoreData(string file)
        {
            List<string> Data = new List<string>();
            foreach (var teacher in teacherObj.Teachers)
            {
                Data.Add($"{teacher.ID},{teacher.Name},{string.Join(" ", teacher.Class_Sections)}");
            }
            File.WriteAllLines(file, Data);
        }
    }
}
