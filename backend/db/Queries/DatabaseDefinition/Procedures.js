exports.checkRole = `CREATE PROCEDURE check_role ( IN owner_user varchar(255), IN broker_user varchar(255)) 
                    BEGIN 
                    DECLARE countdata,countdata2 INT; 
                    SELECT COUNT(1) INTO countdata FROM User 
                    WHERE Username = broker_user and Role = 'Broker'; 
                    SELECT COUNT(1) INTO countdata2 FROM User 
                    WHERE Username = owner_user and Role = 'Owner'; 
                    IF ( broker_user != NULL && countdata = 0) 
                    THEN 
                    SIGNAL SQLSTATE '45000'
                    SET MESSAGE_TEXT = 'Check Constraint on BrokerUser failed'; 
                    END IF; 
                    IF ( countdata2 = 0) 
                    THEN  
                    SIGNAL SQLSTATE '45000' 
                    SET MESSAGE_TEXT = 'Check Constraint on OwnerUser failed'; 
                    END IF; 
                    END;`;

exports.checkReservationRoomType = `CREATE PROCEDURE check_reservation_type (IN room_no INT, IN hotel_name varchar(255), IN hotel_branch varchar(255))
                                    BEGIN
                                    DECLARE roomtype varchar(255);
                                    SELECT Type INTO roomType FROM Room WHERE Number = room_no AND HotelName = hotel_name AND HotelBranch = hotel_branch;
                                    if( roomType != 'Single' || roomType != 'Double' || roomType != 'Triple')
                                    THEN 
                                    SIGNAL SQLSTATE '45000'
                                    SET MESSAGE_TEXT = 'Check Constraint on RoomType failed'; 
                                    END IF;   
                                    END;`;

