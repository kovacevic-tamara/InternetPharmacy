INSERT INTO ingredient (id, name) VALUES (0, 'Penicillin');
INSERT INTO ingredient (id, name) VALUES (1, 'Sulfonamides');
INSERT INTO ingredient (id, name) VALUES (2, 'Anticonvulsants');
INSERT INTO ingredient (id, name) VALUES (3, 'Aspirin');
INSERT INTO ingredient (id, name) VALUES (4, 'Ibuprofen');
INSERT INTO ingredient (id, name) VALUES (5, 'Insulin');

INSERT INTO patient (id, first_name, last_name, user_type, penalty_count, email, password, phone_number, country, latitude, longitude, street, town)
                    VALUES (1, 'Tom', 'Peterson', 4, 0, 'tom.peterson@gmail.com', 'tommy123', '00987563214', 'USA', 41, 87, 'Fifth Ave', 'Chicago');
INSERT INTO patient (id, first_name, last_name, user_type, penalty_count, email, password, phone_number, country, latitude, longitude, street, town)
                    VALUES (2, 'Jovana', 'Jeremic', 4, 0, 'jovana.jeremic@gmail.com', 'malakojacinicuda', '+988795562', 'France', 49, 2, 'Lui V', 'Paris');

INSERT INTO patient_allergies (patient_id, allergies_id) VALUES (1, 4);
INSERT INTO patient_allergies (patient_id, allergies_id) VALUES (1, 2);
INSERT INTO patient_allergies (patient_id, allergies_id) VALUES (1, 5);
INSERT INTO patient_allergies (patient_id, allergies_id) VALUES (2, 2);
INSERT INTO patient_allergies (patient_id, allergies_id) VALUES (2, 1);

INSERT INTO pharmacy (id, country, latitude, longitude, street, town, description, name) VALUES ('1', 'Portugal', 43,3,'Sui gue peauqe', 'Lisbon', 'All purpose pharmacy!', 'Suei Mei');

INSERT INTO pharmacy_admin (id, first_name, last_name, user_type, email, password, phone_number, country, latitude, longitude, street, town, pharmacy_id)
VALUES (1, 'Jovan', 'Brokovich', 2, 'brokovich@gmail.com', 'broka', '0605435487', 'SRB', 41, 87, 'Avenue 3rd', 'Belgrade',1);