package app.service;

import app.model.user.Pharmacist;

import java.time.LocalDateTime;
import java.util.Collection;

public interface CounselingService {
    Collection<Pharmacist> findAvailablePharmacists(LocalDateTime dateTime);
}
