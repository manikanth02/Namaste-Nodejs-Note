# DevTinder Project - ref, populate and Thought process for writing API's
## Overview
Today's focus is on using `ref`, `populate`, and implementing a structured thought process for writing APIs. The work involves building an API to review and update the status of a connection request.

---

## API Details

### Endpoint:
- **POST `/request/review/:status/:requestId`**

### Purpose:
- To accept or reject a connection request by updating its status based on specific conditions.

---

## Thought Process for API Development

### Steps:

1. **Getting the Logged-In User**:
   - Identify the user making the request using authentication mechanisms (e.g., JWT or session).

2. **Retrieving Parameters**:
   - Extract `status` and `requestId` from the API parameters.

3. **Validating Input**:
   - Ensure that the `status` parameter only contains valid values:
     - Allowed values: `accepted` or `rejected`.
   - Return an error response if the `status` is invalid.

4. **Searching for the Connection Request**:
   - Query the database to find a connection request that:
     - Matches the provided `requestId`.
     - Has the `toUserId` field equal to the logged-in user's ID.
     - Has the `status` set to `interested`.

5. **Updating the Status**:
   - If a matching connection request is found, update its `status` field to the new value provided in the parameters.
   - Respond with a success message or the updated connection request data.


```javascript
    requestRouter.post(
    "/request/review/:status/:requestId",
    userAuth,
    async (req, res) => {
        try {
        const loggedInUser = req.user;
        const { status, requestId } = req.params;

        //Validate Status
        const allowedStatuses = ["accepted", "rejected"];
        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
            message: "Invalid Status or Status not allowed",
            success: false,
            });
        }

        //validating the request
        const connectionRequest = await ConnectionRequestModel.findOne({
            _id: requestId,
            toUserId: loggedInUser._id,
            status: "intrested",
        });

        if (!connectionRequest) {
            return res.status(404).json({
            message: "request not found ",
            success: false,
            });
        }

        connectionRequest.status = status;
        const data = await connectionRequest.save();

        res.status(200).json({
            message: "Connection request " + status,
            data,
            success: true,
        });
        } catch (error) {
        res.status(400).send("ERROR:" + error.message);
        }
    }
    );
```

---
