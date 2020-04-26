# role

use `admin_email_id` and `admin_enterprise_id` during registration into enterprise record

update them during role assignment

after search user will be told whether the member is eligible or not. only then `add as member` is enabled.

after the button click both `role collection` (new record of the member) and enterprise docuemnt with `member_email_id` array gets updated

the enterprise gets created based on the user_id of the logged in user

```
admin_enteprise_id: "admin_id"
admin_user_id: profile_pic
email_id:
role: "member/admin"
user_id:
user_name:
```

# how to delete the member:

restore the `admin_email_id` and `admin_enterprise_id` but how?

- update the `admin_email_id` by member's email id
- update the `admin_enterprise_id` by member's enterprise id
- store these info in role collection

# enterprise

```
admin_email_Id
admin_enterprise_id
buyers
contact_no
map_location: "geolocation"
member_email: array of email id
name
opened_closed
pan_no
quotation
title
user_id
vat_no
visibility:"public"
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

# sold (buyer)

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

## sold/invoice

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

## sold/received_date

```
mode:"cash"
paid_amount:
paid_by_enterprise:
paid_by_user:
received_by_enterprise:
received_by_user
```
