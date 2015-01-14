$(document).ready(function(){

		$('form').submit(function(){
		$('.users').append(
			'<tr><td>' + $("#firstName").val() +'</td>' + 
			'<td>' + $("#lastName ").val() +'</td>' +
			'<td>' + $("#emailAddress ").val() +'</td>' +
			'<td>' + $("#number ").val() +'</td></tr>'
			);
		return false;
		})



	// $('form').submit(function(){
	// 	// alert('test')
	// 	$( '#test' ).append( $( 'text' ) );
	// })
})
// <td>First Name</td><td>Last Name</td><td>Email Adress</td><td>Contact #</td>