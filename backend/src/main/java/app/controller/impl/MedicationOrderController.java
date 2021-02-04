package app.controller.impl;

import app.dto.MedicationOrderDTO;
import app.model.medication.Medication;
import app.model.medication.MedicationOrder;
import app.service.MedicationOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
@RequestMapping(value = "api/medicationOrder")
public class MedicationOrderController {
    private final MedicationOrderService medicationOrderService;

    @Autowired
    public MedicationOrderController(MedicationOrderService medicationOrderService) {
        this.medicationOrderService = medicationOrderService;
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity<Collection<MedicationOrder>> read() {
        return new ResponseEntity<>(medicationOrderService.read(), HttpStatus.OK);
    }

    @PostMapping(consumes = "application/json", value = "/newMedicationOrder")
    public ResponseEntity<Boolean> newMedicationOrder(@RequestBody MedicationOrderDTO medicationOrderDTO){
        return new ResponseEntity<>(medicationOrderService.createNewMedicationOrder(medicationOrderDTO), HttpStatus.OK);
    }

    @GetMapping(value = "/getAllMedicationOrdersByPharmacy/{pharmacyId}")
    public ResponseEntity<Collection<MedicationOrderDTO>> newMedicationOrder(@PathVariable Long pharmacyId){
        return new ResponseEntity<>(medicationOrderService.getAllMedicationOrdersByPharmacy(pharmacyId), HttpStatus.OK);
    }

    @GetMapping(value = "/getOrderByPharmacyAdmin")
    public ResponseEntity<Collection<MedicationOrderDTO>> getMedicationOrderByPharmacyAdmin(@PathVariable Long pharmacyAdminId){
        return new ResponseEntity<>(medicationOrderService.getMedicationOrderByPharmacyAdmin(pharmacyAdminId), HttpStatus.OK);
    }
}
