# user

```
id: result.uid,
name: result.displayName,
email: result.email,
photoUrl: result.photoURL,
accessToken
```

# eligibleOrNot

```
{"admin_email_id":"riwatrj@gmail.com","admin_enterprise_id":"DULkEuiCyxWzfBosXXBbOMpfnij1",
"buyers":1000,
"contact_no":"1000",
"map_location":{"_lat":1,"_long":1},
"member_email":["user1","user2"],
"name":"Raj Kumar Pasal",
"opened_closed":true,
"pan_no":"1000","quotation":1000,
"title":"rajkumar uncle pasal","user_id":"t98Blh8vyqerPbJJHLFPm1XzngR2",
"vat_no":"1000",
"visibility":"public"}
```

# deleteRole

`givenMemberAllInfo`: individual members info will be provided through delte button to `deleteRole` in profile folder for store

it will contain following info from `role`

```
admin_enterprise_id: firebase.auth().currentUser.uid,
admin_email_id: firebase.auth().currentUser.email,
role: "member",
user_id: state.eligibleOrNot[0].uid,
user_name: state.eligibleOrNot[0].displayName,
profile_pic: state.eligibleOrNot[0].photoURL
```
