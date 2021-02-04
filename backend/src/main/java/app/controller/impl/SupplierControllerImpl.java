package app.controller.impl;

import app.model.medication.MedicationOffer;
import app.service.SupplierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collection;

@Controller
@RequestMapping(value = "api/suppliers")
public class SupplierControllerImpl {
    private final SupplierService supplierService;

    public SupplierControllerImpl(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @GetMapping(value = "/getAllBySupplier")
    public ResponseEntity<Collection<MedicationOffer>> getMedicationOffersBySupplier(@RequestBody Long supplierId) {
        return new ResponseEntity<>(supplierService.getMedicationOffersBySupplier(supplierId), HttpStatus.OK);
    }
}
