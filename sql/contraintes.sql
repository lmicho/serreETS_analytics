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

ALTER TABLE Sensor_Alert
ADD CONSTRAINT FK_Sensor_Alert_Data FOREIGN KEY (ID_Sensor) REFERENCES Sensor(ID),
ADD CONSTRAINT FK_Sensor_Alert_Alert FOREIGN KEY (ID_Alert) REFERENCES Alert(ID);

ALTER TABLE Alert_TypeAlert
ADD CONSTRAINT FK_Alert_TypeAlert_Alert FOREIGN KEY (ID_Alert) REFERENCES Alert(ID),
ADD CONSTRAINT FK_Alert_TypeAlert_TypeAlert FOREIGN KEY (ID_TypeAlert) REFERENCES TypeAlert(ID);

ALTER TABLE Alert_Family
ADD CONSTRAINT FK_Alert_Famiy_Alert FOREIGN KEY (ID_Alert) REFERENCES Alert(ID),
ADD CONSTRAINT FK_Alert_Family_family FOREIGN KEY (ID_Family) REFERENCES Family(ID);