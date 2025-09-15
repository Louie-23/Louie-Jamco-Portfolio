export type Project = {
  id: number;
  category: "Prototypes" | "Software";
  title: string;
  image: string;
  description: string;
  images?: string[];
  videos?: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    category: "Prototypes",
    title: "Thesis Project (Drone): An IoT-Based Thermal Imaging Robot",
    image: "PrototypeA/PrototypeA.webp",
    description: "An IoT-based drone system designed for search and rescue operations, equipped with a thermal camera, microwave motion sensor, Pixhawk flight controller, Raspberry Pi 4, and GPS. The system uses OpenCV for thermal image processing and integrates with an offline web-based GUI (Python, HTML, CSS, JavaScript) to provide real-time monitoring and flexible control, enabling responders to detect survivors and navigate challenging environments more effectively while reducing the effort and risk of human engagement in Search and Rescue operations.",
    images: ["PrototypeA/PrototypeA.webp", "PrototypeA/PrototypeA2.webp", "PrototypeA/PrototypeA3.webp"],
    videos: ["PrototypeA/PrototypeA4.mp4","PrototypeA/PrototypeA5.mp4"],
    link: ""
  },
  {
      id: 2,
      category: "Prototypes",
      title: "IoT Real-Time Water Quality Monitoring",
      image: "PrototypeB/PrototypeB.webp",
      description:
        "An IoT-based real-time water quality monitoring system using ESP32, integrated with Blynk IoT for enhanced monitoring and remote access. The prototype utilizes Temperature, Total Dissolved Solids (TDS), Turbidity, and pH sensors to provide accurate water condition data, helping ensure safer and more reliable water usage.",
      images: ["PrototypeB/PrototypeB.webp", "PrototypeB/PrototypeB2.webp", "PrototypeB/PrototypeB3.webp","PrototypeB/PrototypeB6.webp"], 
      videos: ["PrototypeB/PrototypeB4.mp4", "PrototypeB/PrototypeB5.mp4"],
      link:"https://github.com/Louie-23/IoT-Water-Quality-Monitor-using-ESP32.git"
      },
    {
      id: 3,
      category: "Prototypes",
      title: "Roadside Air Pollution Detection and Display System",
      image: "PrototypeC/PrototypeC.webp",
      description:
        "A roadside air pollution detection and display system powered by Arduino and a 12864 LCD. The prototype integrates Particulate Matter (PM), Carbon Monoxide (CO), Carbon Dioxide (CO₂), and Total Volatile Organic Compounds (TVOC) sensors to provide real-time air quality data. Designed to raise public awareness and promote healthier environments through accessible roadside monitoring.",
      images: ["PrototypeC/PrototypeC.webp", "PrototypeC/PrototypeC2.webp", "PrototypeC/PrototypeC3.webp", "PrototypeC/PrototypeC5.webp"], 
      videos: ["PrototypeC/PrototypeC4.mp4"],
      link:"https://github.com/Louie-23/Roadside-Air-Pollution-Detection-using-Arduino-and-12864-LCD.git"
    },
    {
      id: 4,
      category: "Prototypes",
      title: "Automatic Obstacle Avoidance Car with Manual IR Remote Control",
      image: "PrototypeD/PrototypeD.webp",
      description:
        "An Arduino-powered obstacle avoidance car that combines autonomous navigation with manual control via IR remote. Equipped with a motor shield and ultrasonic sensor, the system automatically detects and avoids obstacles while also allowing users to switch to manual driving, providing both safety and flexibility. This project demonstrates practical robotics applications in smart vehicles and automation.",
      images: ["PrototypeD/PrototypeD.webp", "PrototypeD/PrototypeD2.webp", "PrototypeD/PrototypeD3.webp"], 
      videos: ["PrototypeD/PrototypeD4.mp4","PrototypeD/PrototypeD5.mp4","PrototypeD/PrototypeD6.mp4"],
      link:"https://github.com/Louie-23/Automatic-Obstacle-Avoidance-Car-with-Manual-IR-Remote-Control-using-Arduino.git" 
    },
    {
      id: 5,
      category: "Software",
      title: "Barangay Inventory Management System",
      image: "SoftwareA/SoftwareA.webp",
      description:
        "A Barangay Inventory Management System Software developed in Visual Studio using C# and Microsoft SQL Server. The system features a user-friendly GUI and integrated database to efficiently manage records and track supplies in barangay operations.",
      images: [ "SoftwareA/SoftwareA2.webp","SoftwareA/SoftwareA3.webp","SoftwareA/SoftwareA4.webp","SoftwareA/SoftwareA12.webp","SoftwareA/SoftwareA5.webp","SoftwareA/SoftwareA6.webp","SoftwareA/SoftwareA7.webp","SoftwareA/SoftwareA8.webp","SoftwareA/SoftwareA9.webp"], 
      videos: ["SoftwareA/SoftwareA10.mp4","SoftwareA/SoftwareA11.mp4"],
      link:"https://github.com/Louie-23/Barangay-Inventory-Management-System-using-C--and-MicrosoftSQL.git"
    },
    {
      id: 6,
      category: "Software",
      title: "Information and Public Affairs Services Website",
      image: "SoftwareB/SoftwareB.webp",
      description:
        "A web-based system developed in Visual Studio Code using HTML, Bootstrap, JavaScript, and React.js for the frontend, and PHP with MySQL for the backend. The system runs on XAMPP with phpMyAdmin for database management It highlights the implementation of Create, Read, Update, and Delete (CRUD) operations, demonstrating the concept and functionality of managing records through a modern web interface. (Work in progress)",
      images: ["SoftwareB/SoftwareB.webp","SoftwareB/SoftwareB2.webp","SoftwareB/SoftwareB3.webp","SoftwareB/SoftwareB4.webp","SoftwareB/SoftwareB5.webp"], 
      videos: ["SoftwareB/SoftwareB6.mp4"],
      link:""
    },
    {
      id: 7,
      category: "Software",
      title: "CPU Scheduling System (Shortest Remaining Time First) Calculator using C++",
      image: "SoftwareC/SoftwareC.webp",
      description:
        "A CPU Scheduling System (Shortest Remaining Time First) Calculator developed in Dev-C++ using the C++ programming language. The project simulates process scheduling to calculate waiting time, turnaround time, and completion time, providing a practical demonstration of operating system concepts in process management.",
      images: ["SoftwareC/SoftwareC.webp", "SoftwareC/SoftwareC2.webp","SoftwareC/SoftwareC3.webp"], 
      videos: ["SoftwareC/SoftwareC4.mp4"],
      link:"https://github.com/Louie-23/CPU-Scheduling-Shortest-Remaining-Time-First-Calculator-using-C--.git"
    },
    {
      id: 8,
      category: "Software",
      title: " Development of C# game (Flappy Bird style)",
      image: "SoftwareD/SoftwareD.webp",
      description:
        "A work-in-progress Flappy Bird–style game developed in Unity and Visual Studio Code using C#. The project is inspired by YouTube tutorials and self-study, serving as a learning experience in game development, physics-based mechanics, and interactive design.",
      images: ["SoftwareD/SoftwareD2.webp", "SoftwareD/SoftwareD.webp","SoftwareD/SoftwareD3.webp","SoftwareD/SoftwareD4.webp"], 
      videos: ["SoftwareD/SoftwareD5.mp4"],
      link:""
      },
  ];