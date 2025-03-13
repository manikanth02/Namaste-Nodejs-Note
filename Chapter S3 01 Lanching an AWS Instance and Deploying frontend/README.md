# Launching an AWS Instance and deploying frontend

## 📌 Code Demonstration Links  
🔗 **Backend Repository:** [DevTinder Backend](https://github.com/akshadjaiswal/devTinder-backend)  
🔗 **Frontend Repository:** [DevTinder Frontend](https://github.com/akshadjaiswal/devTinder-frontend)  

---

## 📌 Overview  
Today, the focus is on **launching an AWS EC2 instance** and preparing for **frontend deployment**. Setting up a **Ubuntu-based EC2 instance** ensures that the DevTinder application can run in a cloud environment, making it accessible from anywhere.  

This process includes:  
- **Signing up for AWS Console**.  
- **Creating a new EC2 instance** with the necessary configurations.  
- **Setting up a key pair for secure SSH access**.  
- **Ensuring the instance is running and ready for deployment**.  

---

## ✅ Steps Completed  

### **1️⃣ Setting Up AWS Console Account**  
- Completed the **5-step sign-up process** for an AWS account.  
- Verified identity and enabled billing details for access to AWS services.  

### **2️⃣ Creating an EC2 Instance**  
- Navigated to **AWS EC2 Dashboard**.  
- Clicked on **Create Instance** and provided the following details:  
  - **Instance Name:** DevTinder  
  - **Operating System:** Ubuntu (Latest LTS)  
  - **Instance Type:** Chosen based on project needs (e.g., t2.micro for free tier).  

### **3️⃣ Configuring Key Pair Login**  
- Created a **new Key Pair** to securely access the instance using SSH.  
- Downloaded the **`.pem` file** and stored it safely for future use.  

### **4️⃣ Launching the Instance**  
- Clicked **Create Instance** and monitored the setup process.  
- Waited for the instance to reach the **"Running" state**.  
- Ensured that the **status check passed (2/2 checks completed)**.  

---

## 🎯 Next Steps  

- **Connect to the EC2 instance via SSH** using the key pair.  
- **Install necessary dependencies** (Node.js, Nginx, PM2) for frontend deployment.  
- **Deploy the DevTinder frontend** and configure it for public access.  
- **Set up a custom domain and HTTPS** using AWS Route 53 and SSL certificates.  

---

## 🔥 Conclusion  
The **AWS EC2 instance** is now successfully launched, and the foundation for **DevTinder frontend deployment** is ready. The next step involves **connecting to the server, installing dependencies, and deploying the application**. 🚀  
