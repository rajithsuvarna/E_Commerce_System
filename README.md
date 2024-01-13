To run the project use

**npm start**

**Project Description:**

This project aims to develop a robust API for an E-commerce system. The API provides essential functionalities, allowing users to seamlessly create new products and product variants, delete existing products and their variants, and retrieve comprehensive product information. This set of APIs empowers developers to efficiently manage and organize the product catalog within the E-commerce system, contributing to a seamless and dynamic user experience.

**To create Products:**

**API:** http://localhost:8000/api/v1/product/create

**To create Product Variant for the mentioned Product id:**

**API:** http://localhost:8000/api/v1/product/productvariant/:id/create

**To delete Product:**

**API**: http://localhost:8000/api/v1/productvariant/delete/:id

**To delete Product Variants:**

**API**: http://localhost:8000/api/v1/product/delete/:id

**To display Product using ID:**

**API:** http://localhost:8000/api/v1/product/view/:id

**To display all The Product:**

**API**: http://localhost:8000/api/v1/product/viewall

**To Search by Product name,Description, Variant Name:**

**API**:http://localhost:8000/api/v1/product/search/:key


---------------------------------------------------------------------------------------------------------------
**Test Cases and Result:**

**1)Check whether the Product is Created with name, description, price, and can have multiple variants**

**API:** http://localhost:8000/api/v1/product/create

**Product name:** shirt

**Description:** Men Solid Crew Neck T-shirt

**Price:** 1200

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/00c1b8dc-0bd7-448d-bcdd-60db6841fb3e)

**Result:** Product created with required details

---------------------------------------------------------------------------------------------------------------------

**2)Check whether the Product Variants are Created with  name, SKU, additional cost and stock count.**

**API:** http://localhost:8000/api/v1/product/productvariant/:id/create

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/e7e33c05-1619-4ccd-88b6-f18bd9a6728f)

**Variantname:** yellow colour

**SKU: **sn100

**Additionalcost:** 300

**Stockcount**:2

**Result**: Product Variants created with required details

------------------------------------------------------------------------------------------------------------------------

**3)Check whether the Product Variant Deleted or not**

**API**: http://localhost:8000/api/v1/productvariant/delete/:id

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/d6bf66fb-73bb-465a-92c8-b4bc85857b03)

**Result**: Product Variant Deleted Successfully

-------------------------------------------------------------------------------------------------------------------------

**4)Check whether the Product Deleted with all the Product variants associated to it**

**API**: http://localhost:8000/api/v1/product/delete/:id

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/233bbd78-ee89-4518-af6a-9337ec2c1dc2)

**Result**: Products Deleted Successfully

---------------------------------------------------------------------------------------------------------------------

**5)Check whether all the Products displayed with all the Product variants associated to it**

**API**: http://localhost:8000/api/v1/product/viewall

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/b5715d0c-062e-472d-9beb-58b1d1d182c6)

**Result**:All Products displayed Successfully

--------------------------------------------------------------------------------------------------------------------

**6)Check whether we are able to search by product name, description, product variant name**

**Using Product name**

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/8cdec517-2638-4a0f-811c-770d5ff6088b)

**Using Product Description**

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/843feb42-008f-4270-b4f0-e5047ebb256b)

**Using Product Variant name**

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/62bd385c-f0ec-455e-ad5f-4d6edde8f9a0)

**Result**:We are able to search by name,description,and variant name







