import { Component, OnInit } from '@angular/core';
import { CandidateService } from "../services/candidate.service";
import { Candidate } from '../Models/data-model';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  hrList: string[] = ["Sanchita","Rahul","Aditi","Sriparna","Neha"];
  dataSource: MatTableDataSource<Candidate>;
  displayedColumns: string[];
  columnNames = [{
    id: "Name",
    value: "Name"

  }, {
    id: "Email",
    value: "Email"
  },
  {
    id: "Phone",
    value: "Phone"
  },
  {
    id: "DOInterview",
    value: "DOInterview"
  },
  {
    id: "HR",
    value: "HR"
  },
  {
    id: "Interviewer",
    value: "Interviewer"
  },
  {
    id: "Selected",
    value: "Selected"
  }];
  loading = false;
  submitted = false;
  candidateForm: FormGroup;
  createMode = false;
  editMode = false;


  constructor(private candidateService: CandidateService, private alertService:AlertService) {
    this.createForm();
  }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.displayedColumns.push("actionsColumn");
    this.getCandidateList();
  }

  getCandidateList()
  {
    this.candidateService.getCandidateList().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Candidate>(data);
      }
    );
  }

  createForm() {
    this.candidateForm = new FormGroup(
      {
        'id': new FormControl(-1),
        'name': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'phone': new FormControl('', Validators.required),
        'dointerview': new FormControl('', Validators.required),
        'hr': new FormControl('', Validators.required),
        'interviewer': new FormControl('', Validators.required),
        'selected': new FormControl(false)
      }
    );
  }

  createNew() {
    this.submitted = false;
    this.loading = false;
    this.createMode = true;
    this.resetForm();
  }

  edit(row) {
    this.submitted = false;
    this.loading = false;
    this.editMode = true;
    this.candidateForm.reset({
      'id': row.Id,
      'name': row.Name,
      'email': row.Email,
      'phone': row.Phone,
      'dointerview': row.DOInterview,
      'hr': row.HR,
      'interviewer': row.Interviewer,
      'selected': row.Selected,
    });
  }

  delete(row){
    this.candidateService.deleteCandidate(row.Id).subscribe(data=>{
      this.alertService.error('Candidate deleted successfully.');
      // Rebind
      //this.createForm();
      this.editMode = false;
      this.createMode = false;
      this.getCandidateList();
    });
  }

  addEditUser() {
    this.submitted = true;
    if (this.candidateForm.invalid) {
      return;
    }
    this.loading = true;
    const formModel = this.candidateForm.value;
    let candidateData: Candidate;
    candidateData = {
      id: formModel.id,
      name: formModel.name,
      email: formModel.email,
      phone: formModel.phone,
      dointerview: formModel.dointerview,
      hr: formModel.hr,
      interviewer: formModel.interviewer,
      selected: formModel.selected
    } as Candidate;
    if (formModel.id > 0) {
      // Edit
      this.candidateService.editCandidate(candidateData).subscribe(data=>{
        this.alertService.error('Candidate edited successfully.');
        // Rebind
        //this.createForm();
        this.editMode = false;
        this.getCandidateList();
      });
    }
    else {
      this.candidateService.addCandidate(candidateData).subscribe(data=>{
        this.alertService.error('Candidate added successfully.');
        // Rebind
        //this.createForm();
        this.createMode = false;
        this.getCandidateList();
      });
    }
  }

  resetForm() {
    this.candidateForm.reset({
      'id': -1,
      'name': '',
      'email': '',
      'phone': '',
      'dointerview': null,
      'hr': '',
      'interviewer': '',
      'selected': false,
    });
  }

  cancelCreateOrEdit() {
    this.createMode = false;
    this.editMode = false;
  }

}
