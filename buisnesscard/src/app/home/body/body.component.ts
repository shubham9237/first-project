import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  selectedTab = 'Connect';
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let tabs = $('.tabs');
    let selector = $('.tabs').find('a').length;
    let activeItem = tabs.find('.active');
    let activeWidth = activeItem.innerWidth();
    $('.selector').css({
      left: activeItem.position.left + 'px',
      width: activeWidth + 'px',
    });

    $('.tabs').on('click', 'a', function (e) {
      e.preventDefault();
      $('.tabs a').removeClass('active');
      $(this).addClass('active');
      let activeWidth = $(this).innerWidth();
      let itemPos = $(this).position();
      $('.selector').css({
        left: itemPos.left + 'px',
        width: activeWidth + 'px',
      });
    });
  }
}
