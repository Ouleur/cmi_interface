/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Datatable js
 */

$(document).ready(function(){$("#datatable").DataTable();var a=$("#datatable-buttons").DataTable({lengthChange:!1,buttons:["copy","excel","pdf","colvis"]});a.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)")});