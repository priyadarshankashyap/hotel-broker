//RequestsRelation stores the Reservation requests relationship with Customers and Hotel rooms.
module.exports = `CREATE TABLE RequestsRelation(
    ResID INT NOT NULL PRIMARY KEY,
    CustomerUser varchar(255) NOT NULL,
    HotelName varchar(255) NOT NULL,
    HotelBranch varchar(255) NOT NULL,
    RoomNumber INT NOT NULL,
    isDeleted boolean DEFAULT 0 NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_RESERVATION FOREIGN KEY (ResID) REFERENCES Reservation(ID),
    CONSTRAINT FK_ROOM_REQUESTS FOREIGN KEY (RoomNumber) REFERENCES Room(Number),
    CONSTRAINT FK_USER_REQUESTS  FOREIGN KEY (CustomerUser) REFERENCES User(Username),
    CONSTRAINT FK_HOTEL_REQUESTS FOREIGN KEY (HotelName,HotelBranch) REFERENCES Hotel(Name,Branch)
);`;
