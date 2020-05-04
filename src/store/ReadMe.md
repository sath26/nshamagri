# user

```json
{
  "id": result.uid,
  "name": result.displayName,
  "email": result.email,
  "photoUrl": result.photoURL,
  accessToken
}
```

# eligibleOrNot

```json
{
  "admin_email_id": "riwatrj@gmail.com",
  "admin_enterprise_id": "DULkEuiCyxWzfBosXXBbOMpfnij1",
  "buyers": 1000,
  "contact_no": "1000",
  "map_location": { "_lat": 1, "_long": 1 },
  "member_email": ["user1", "user2"],
  "name": "Raj Kumar Pasal",
  "opened_closed": true,
  "pan_no": "1000",
  "quotation": 1000,
  "title": "rajkumar uncle pasal",
  "user_id": "t98Blh8vyqerPbJJHLFPm1XzngR2",
  "vat_no": "1000",
  "visibility": "public"
}
```

# deleteRole

`givenMemberAllInfo`: individual members info will be provided through delte button to `deleteRole` in profile folder for store

it will contain following info from `role`

```json
{
  "admin_enterprise_id": firebase.auth().currentUser.uid,
  "admin_email_id": firebase.auth().currentUser.email,
  "role": "member",
  "user_id": state.eligibleOrNot[0].uid,
  "user_name": state.eligibleOrNot[0].displayName,
  "profile_pic": state.eligibleOrNot[0].photoURL
}
```

# createRole

```json
{
  "admin_email_id": "riwatrj@gmail.com",
  "admin_enterprise_id": "DULkEuiCyxWzfBosXXBbOMpfnij1",
  "buyers": 1000,
  "contact_no": "1000",
  "map_location": { "_lat": 1, "_long": 1 },
  "member_email": ["user1", "user2"],
  "name": "Raj Kumar Pasal",
  "opened_closed": true,
  "pan_no": "1000",
  "quotation": 1000,
  "title": "rajkumar uncle pasal",
  "user_id": "t98Blh8vyqerPbJJHLFPm1XzngR2",
  "vat_no": "1000",
  "visibility": "public"
}
```

enterprise info of all member will have to be updated i.e.
<b>functions</b> for each field of of each member will have to be created

```javascript
  try {
      await db
        .collection("enterprise")
        .doc(user.id)
        .collection("role")
        .doc(state.eligibleOrNot[0].uid)
        .set({
          admin_enterprise_id: firebase.auth().currentUser.uid,
          admin_email_Id: firebase.auth().currentUser.email,
          role: "Member",
          user_id: state.eligibleOrNot[0].uid,
          email: state.eligibleOrNot[0].email,
          user_name: state.eligibleOrNot[0].displayName,
          profile_pic: state.eligibleOrNot[0].photoURL
        });
      var updateMemberInfo = await db
        .collection("enterprise")
        .doc(firebase.auth().currentUser.uid);
      updateMemberInfo.update({
        member_email: firebase.firestore.FieldValue.arrayUnion(
          state.eligibleOrNot[0].email
        )
      });
      var updateAdminInfo = await db
        .collection("enterprise")
        .doc(state.eligibleOrNot[0].uid);
      updateAdminInfo.update({
        title: state.current_enterprise[0].title,
        pan_no: state.current_enterprise[0].pan_no,
        vat_no: state.current_enterprise[0].vat_no,
        contact_no: state.current_enterprise[0].contact_no,
        admin_enterprise_id: firebase.auth().currentUser.uid,
        admin_email_Id: firebase.auth().currentUser.email
      });
      await db
        .collection("enterprise")
        .doc(user.id)
        .collection("role")
        .doc(state.eligibleOrNot[0].uid)
        .set({
          admin_enterprise_id: firebase.auth().currentUser.uid,
          admin_email_Id: firebase.auth().currentUser.email,
          role: "Admin",
          user_id: state.eligibleOrNot[0].uid,
          email: state.eligibleOrNot[0].email,
          user_name: state.eligibleOrNot[0].displayName,
          profile_pic: state.eligibleOrNot[0].photoURL
        });
```

`MemberInfo`: current member's info gets updated
`AdminInfo`: admin inof gets updated
`settings` info also will need to be added

## only admin will know who are teh members other wont know

<b>other members info???</b>

- will also have to be updated to get which members do they have when they get to member's sections
- <b>else</b> his admin and member will only be provided

however even in the above situation the following query works

```javascript
db.collection("enterprise").where(
  "member_email",
  "array-contains",
  //firebase.auth().currentUser.email
  user.email
);
```
