create database CaseStudySql
Use CaseStudySql


drop  table WorkOut_Category

create table WorkOut_Category(
Category_id int primary key identity,
Category_Name varchar(64)
)


create table WorkOut_Collection(
WorkOut_Title varchar(128),
WorkOut_Note varchar(256),
Calories_Burn_Per_Minute float,
Category_id int foreign key references WorkOut_Category(Category_id), 
WorkOut_id int  identity primary key
)

create table WorkOut_Active(
WorkOut_id int foreign key references WorkOut_Collection(WorkOut_id),
Start_time Time,
Starts_Date date,
End_Date date,
End_Time time,
Comment varchar(64),
Statuss bit,
id int primary key identity
)

drop  table WorkOut_Active

insert into WorkOut_Category values ('Jogging')
insert into WorkOut_Category values ('Walking')
select * from WorkOut_category