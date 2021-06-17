using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading.Tasks;

namespace Project_1
{
    class Program
    {
        static TeacherFileHandler TeacherFile = new TeacherFileHandler();
        static Teacher teacher = TeacherFile.teacherObj;
        static Boolean end = false;
        static string file = "Data.txt";
        static void Main(string[] args)
        {
            intro();
            try
            {
                TeacherFile.OpenFile(file);
            }catch(Exception e)
            {
                Console.WriteLine($"This error have been occured: {e}, while trying open the text file");
            }

            while (!end)
            {
                selectBox();
                try
                {
                    Selecter();
                }
                catch (Exception e)
                {
                    Console.WriteLine($"This error have been occured: {e}, while trying choose one of the choices");
                }
            }
        }

        private static void intro()
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("-----------------------Welcome to Rainbow School System-----------------------");
            Console.WriteLine("----------As a teacher you can store, retrieve and update your data-----------");
            Console.WriteLine("--------------This System has been developed by Adel Althubaity---------------");
            Console.ResetColor();
        }

        private static void selectBox()
        {
            Console.ForegroundColor = ConsoleColor.DarkYellow;
            Console.WriteLine("---------------------------------------------------------");
            Console.WriteLine("|\tChoose:\t\t\t\t\t\t|");
            Console.WriteLine("|\t1)Add a new teacher\t\t\t\t|");
            Console.WriteLine("|\t2)Update an exsisting teacher\t\t\t|");
            Console.WriteLine("|\t3)Retrive teachers list\t\t\t\t|");
            Console.WriteLine("|\t4)Exit  from the system\t\t\t\t|");
            Console.WriteLine("---------------------------------------------------------");
            Console.ResetColor();
        }

        private static void Selecter()
        {
            int Choice = Convert.ToInt32(Console.ReadLine());
            switch (Choice)
            {
                case 1:
                    teacher.addTeacher();
                    break;
                case 2:

                    break;
                case 3:
                    teacher.RetriveTeachersList();
                    break;
                case 4:
                    TeacherFile.StoreData(file);
                    end = true;
                    Console.WriteLine("---------------------------------------------------------");
                    Console.WriteLine("|\tThank You for using our system\t\t\t|");
                    Console.WriteLine("|\tSee you later...\t\t\t\t|");
                    Console.WriteLine("---------------------------------------------------------");
                    break;
                default:
                    Console.WriteLine("Wrong choice...");
                    break;
            }
        }
    }
}
