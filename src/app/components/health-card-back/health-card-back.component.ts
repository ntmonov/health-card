
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-health-card-back',
  templateUrl: './health-card-back.component.html',
  styleUrls: ['./health-card-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthCardBackComponent {
  public packets: any = [
    {
      name: 'Допълнителни услуги към болнична помощ',
      option: 'Разширена',
      startDate: '01.05.2022'
    },
    {
      name: 'Допълнителни услуги към болнична помощ',
      option: 'Разширена',
      startDate: '01.05.2022'
    },
    {
      name: 'Допълнителни услуги към болнична помощ',
      option: 'Разширена',
      startDate: '01.05.2022'
    },
    {
      name: 'Допълнителни услуги към болнична помощ',
      option: 'Разширена',
      startDate: '01.05.2022'
    }
  ]
}
