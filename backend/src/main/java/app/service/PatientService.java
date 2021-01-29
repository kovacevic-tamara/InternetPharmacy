package app.service;

import app.dto.UserPasswordDTO;
import app.model.medication.Ingredient;
import app.model.user.Patient;

import java.util.Collection;

public interface PatientService extends CRUDService<Patient> {
    void changePassword(UserPasswordDTO passwordKit);

    Collection<Ingredient> getPatientAllergieIngridients(Long id);
}
