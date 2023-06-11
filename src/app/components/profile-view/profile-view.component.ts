import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileServiceService } from 'src/app/services/profile-service.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  profileId: string;
  profileData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileServiceService,
  ) {
    this.profileId = '';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.profileId = params['id'];
      this.getProfileData();
    });
  }

  getProfileData() {
    this.profileService.getProfile(this.profileId).subscribe(data => {
      this.profileData = data;
    });
  }
}
