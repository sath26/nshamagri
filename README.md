# future plans

- ui must differentiate whether the list of sold is of consumer or an enterprise
- i will use function for one of bothside entry i.e. bought of invoice. this will help to create less expensive security rule

### admin_email_Id is used instead of admin_email_id everywhere

- very important in where statement

## enteprise/role

use `admin_email_id` and `admin_enterprise_id` during registration into enterprise record

update them during role assignment

after search user will be told whether the member is eligible or not. only then `add as member` is enabled.

after the button click both `role collection` (new record of the member) and enterprise docuemnt with `member_email_id` array gets updated

the `enterprise` gets created based on the user_id of the logged in user

```
admin_enterprise_id: firebase.auth().currentUser.uid,
admin_email_id: firebase.auth().currentUser.email,
role: "member",
user_id: state.eligibleOrNot[0].uid,
user_name: state.eligibleOrNot[0].displayName,
profile_pic: state.eligibleOrNot[0].photoURL
```

# how to delete the member:

restore the `admin_email_id` and `admin_enterprise_id` but how?

- update the `admin_email_id` by member's email id
- update the `admin_enterprise_id` by member's enterprise id
- store these info in role collection

# enterprise

the `enterprise` gets created based on the user_id of the logged in user

```
admin_email_Id
admin_enterprise_id
buyers
contact_no
map_location: "geolocation"
member_email: array of email id
displayName
uid
email
photoURL
opened_closed
pan_no
quotation
title
vat_no
visibility:"public"
```

## enteprise/home

```
expnses
sale
income
```

## enterprise/setting

```
deadline_date:true
device_number:
reverse_vat
service_charge
vat_return
```

# bought (seller)

will retrive the following data first and their respective enterprise_id will lead to subcollection

```
buyer_id_enterprise: "admin_enterprise_id"
buyer_id_user: "user_id"
seller_name:
seller_profile_pic
seller_id:"current_user_id"
seller_id_enterprise: "admin_enterprise_id"
paid:
unpaid:
total:
```

here buyer_id_enterprise's `admin_enterprise_id` will be used to fetch data

## bought/invoice

```
invoice_no
total

```

### bought/invoice/items

```
good/service
quantity
rate
total
unit
```

## bought/paid_date

```
mode:"cash"
paid_amount:
paid_by_enterprise:
paid_by_user:
received_by_enterprise:
received_by_user
```

# sold (buyer):

```
buyer_id_enterprise: "admin_enterprise_id"
buyer_id_user: "user_id"
buyer_name:
buyer_profile_pic
seller_id:"current_user_id"
seller_id_enterprise: "admin_enterprise_id"
received:
unreceived:
total:
```

here seller_id_enterprise's `admin_enterprise_id` will be used to fetch data

## sold/invoices

```
invoice_no
total
```

### sold/invoice/items

```
good/service
quantity
rate
total
unit
```

## solds/received_date

```
mode:"cash"
paid_amount:
paid_by_enterprise:
paid_by_user:
received_by_enterprise:
received_by_user
```

## quotations

```json
"id":"1k3ck5e8o",
"label":"oreo",
"value":{
   "category":  [
            {
            "add":true,
            "cantChangeIconAfterFocus":true,
            "done":false,
            "editIcon":true,
            "hover":true,
            "id":"CZEL84yPhusuceB2m1e9",
            "label":"crash course",
            "value":"crash course",
            }
    ]
},
"enterprise_type":"good",
"quantity":1,
"rate":25,
"title":"oreo",
"unit":{
    "id":"MRlshUmJyJQxzCR5Jhi3",
    "label":'"packet",
    "value":"packet",
}
```

## units

```
    "add":true,
    "done":false,
    "editIcon":true,
    "hover":true,
    "id":"CZEL84yPhusuceB2m1e9",
    "label":"crash course",
    "noFocusChange":true,
    "value":"crash course",
```

## categories

```
    "add":true,
    "cantChangeIconAfterFocus":true,
    "done":false,
    "editIcon":true,
    "hover":true,
    "id":"CZEL84yPhusuceB2m1e9",
    "label":"crash course",
    "value":"crash course",
```
