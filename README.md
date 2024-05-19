# snuo-backend

First page with main and appetizers dishes endpoint: api/items/:restaurantId/main-and-appetizers
EXAMPLE: http://localhost:3000/api/items/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e/main-and-appetizers

Second page for ordering:
Master - top of page - same endpoint as for first page for "Šifrarnik" dropdown
Detail - bottom of page - for side dishes and sauces endpoint: /api/items/:restaurantId/side-dishes-and-sauces
    EXAMPLE: http://localhost:3000/api/items/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e/side-dishes-and-sauces

Send order endpoint:
EXAMPLE: POST http://localhost:3000/api/orders/create
    body: {
  "id_objekt": "d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e",
  "br_stol": 3,
  "items": [
    {
      "id_stavka": "a1e8f95e-0bf7-4f6a-8e54-72610b344563",
      "naziv_stavka": "Biftek",
      "cijena": 15.50,
      "kategorija": "GLAVNA_JELA",
      "id_objekt": "d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e",
      "kolicina": 2
    },
    {
      "id_stavka": "c39a099a-bd5a-43c8-8ff4-f3404a2f10cb",
      "naziv_stavka": "Lignje na žaru",
      "cijena": 13.00,
      "kategorija": "GLAVNA_JELA",
      "id_objekt": "d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e",
      "kolicina": 3
    }
  ]
}