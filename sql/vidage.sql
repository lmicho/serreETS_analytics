ALTER TABLE Member_Projet DROP FOREIGN KEY FK_Member_Project_Member;
ALTER TABLE Member_Projet DROP FOREIGN KEY FK_Member_Project_Project;
ALTER TABLE Project_Sensor DROP FOREIGN KEY FK_Project_Sensor_Project;
ALTER TABLE Project_Sensor DROP FOREIGN KEY FK_Project_Sensor_Sensor;
ALTER TABLE Sensor_Arduino DROP FOREIGN KEY FK_Sensor_Arduino_Sensor;
ALTER TABLE Sensor_Arduino DROP FOREIGN KEY FK_Sensor_Arduino_Arduino;
ALTER TABLE Sensor_Status DROP FOREIGN KEY FK_Sensor_Status_Sensor;
ALTER TABLE Sensor_Status DROP FOREIGN KEY FK_Sensor_Status_Status;
ALTER TABLE Sensor_Location DROP FOREIGN KEY FK_Sensor_Location_Sensor;
ALTER TABLE Sensor_Location DROP FOREIGN KEY FK_Sensor_Location_Location;
ALTER TABLE Sensor_DataInfo DROP FOREIGN KEY FK_Sensor_DataInfo_Sensor;
ALTER TABLE Sensor_DataInfo DROP FOREIGN KEY FK_Sensor_DataInfo_DataInfo;
ALTER TABLE DataInfo_Alert DROP FOREIGN KEY FK_DataInfo_Alert_Data;
ALTER TABLE DataInfo_Alert DROP FOREIGN KEY FK_DataInfo_Alert_Alert;
ALTER TABLE Alert_TypeAlert DROP FOREIGN KEY FK_Alert_TypeAlert_Alert;
ALTER TABLE Alert_TypeAlert DROP FOREIGN KEY FK_Alert_TypeAlert_TypeAlert;
ALTER TABLE Alert_Family DROP FOREIGN KEY FK_Alert_Famiy_Alert;
ALTER TABLE Alert_Family DROP FOREIGN KEY FK_Alert_Family_family;

TRUNCATE TABLE Member;
TRUNCATE TABLE Project;
TRUNCATE TABLE Sensor;
TRUNCATE TABLE Arduino;
TRUNCATE TABLE Location;
TRUNCATE TABLE Status;
TRUNCATE TABLE DataInfo;
TRUNCATE TABLE Alert;
TRUNCATE TABLE TypeAlert;
TRUNCATE TABLE Family;
TRUNCATE TABLE Member_Projet;
TRUNCATE TABLE Project_Sensor;
TRUNCATE TABLE Sensor_Arduino;
TRUNCATE TABLE Sensor_Status;
TRUNCATE TABLE Sensor_Location;
TRUNCATE TABLE Sensor_DataInfo;
TRUNCATE TABLE DataInfo_Alert;
TRUNCATE TABLE Alert_TypeAlert;
TRUNCATE TABLE Alert_Family;

ALTER TABLE Member_Project
ADD CONSTRAINT FK_Member_Project_Member FOREIGN KEY (ID_Member) REFERENCES Member(ID),
ADD CONSTRAINT FK_Member_Project_Project FOREIGN KEY (ID_Project) REFERENCES Project(ID);
ALTER TABLE Project_Sensor
ADD CONSTRAINT FK_Project_Sensor_Project FOREIGN KEY (ID_Project) REFERENCES Project(ID),
ADD CONSTRAINT FK_Project_Sensor_Sensor FOREIGN KEY (ID_Sensor) REFERENCES Sensor(ID);
ALTER TABLE Sensor_Arduino
ADD CONSTRAINT FK_Sensor_Arduino_Sensor FOREIGN KEY (ID_Sensor) REFERENCES Sensor(ID),
ADD CONSTRAINT FK_Sensor_Arduino_Arduino FOREIGN KEY (ID_Arduino) REFERENCES Arduino(ID);
ALTER TABLE Sensor_Status
ADD CONSTRAINT FK_Sensor_Status_Sensor FOREIGN KEY (ID_Sensor) REFERENCES Sensor(ID),
ADD CONSTRAINT FK_Sensor_Status_Status FOREIGN KEY (ID_Status) REFERENCES Status(ID);
ALTER TABLE Sensor_Location
ADD CONSTRAINT FK_Sensor_Location_Sensor FOREIGN KEY (ID_Sensor) REFERENCES Sensor(ID),
ADD CONSTRAINT FK_Sensor_Location_Location FOREIGN KEY (ID_Location) REFERENCES Location(ID);
ALTER TABLE Sensor_DataInfo
ADD CONSTRAINT FK_Sensor_DataInfo_Sensor FOREIGN KEY (ID_Sensor) REFERENCES Sensor(ID),
ADD CONSTRAINT FK_Sensor_DataInfo_DataInfo FOREIGN KEY (ID_DataInfo) REFERENCES DataInfo(ID);
ALTER TABLE DataInfo_Alert
ADD CONSTRAINT FK_DataInfo_Alert_Data FOREIGN KEY (ID_DataInfo) REFERENCES DataInfo(ID),
ADD CONSTRAINT FK_DataInfo_Alert_Alert FOREIGN KEY (ID_Alert) REFERENCES Alert(ID);
ALTER TABLE Alert_TypeAlert
ADD CONSTRAINT FK_Alert_TypeAlert_Alert FOREIGN KEY (ID_Alert) REFERENCES Alert(ID),
ADD CONSTRAINT FK_Alert_TypeAlert_TypeAlert FOREIGN KEY (ID_TypeAlert) REFERENCES TypeAlert(ID);
ALTER TABLE Alert_Family
ADD CONSTRAINT FK_Alert_Famiy_Alert FOREIGN KEY (ID_Alert) REFERENCES Alert(ID),
ADD CONSTRAINT FK_Alert_Family_family FOREIGN KEY (ID_Family) REFERENCES Family(ID);