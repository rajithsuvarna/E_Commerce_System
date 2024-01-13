TestCases and Result:
1)Check whether the Product is Created with name, description, price, and can have multiple variants

**API:** http://localhost:8000/api/v1/product/create

**Product name:** shirt
**Description:** Men Solid Crew Neck T-shirt
**Price:** 1200

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/00c1b8dc-0bd7-448d-bcdd-60db6841fb3e)

Result: Product created with required details

2)Check whether the Product Variants are Created with  name, SKU, additional cost and stock count.
API: http://localhost:8000/api/v1/product/productvariant/:id/create

![image](https://github.com/rajithsuvarna/E_Commerce_System/assets/109891044/e7e33c05-1619-4ccd-88b6-f18bd9a6728f)

Variantname: yellow colour
SKU: sn100
Additionalcost: 300
Stockcount:2
Result: Product Variants created with required details
