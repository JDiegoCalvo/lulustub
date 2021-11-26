document.addEventListener( 'DOMContentLoaded', function()
{
	setTimeout( function()
	{
		animateCSS( '#loader_div', 'fadeOut' ).then( ( message ) => 
		{
			loader_div.classList.add( 'd-none' );
		});

		header_div.classList.remove( 'd-none' );

		main_div.classList.remove( 'd-none' );
		animateCSS( '#main_div', 'zoomIn' );

		footer_div.classList.remove( 'd-none' );
	}, 1250 );

	setTimeout( function()
	{
		animateCSS( '#llamar_a', 'tada' );
	}, 2000 );

	setTimeout( function()
	{
		check_cookie();
	}, 5000 );
});

function aceptar_cookies()
{
	set_cookie ( 'lulustub_visitante_acepta_uso_de_cookies', Date(), 365 );

	let OffcanvasBottom = new bootstrap.Offcanvas( document.getElementById( 'offcanvasBottom' ) )
	OffcanvasBottom.hide();

	animateCSS( '#llamar_a', 'tada' );
}

function check_cookie() 
{
	let user = get_cookie( 'lulustub_visitante_acepta_uso_de_cookies' );

	if ( user != '' ) 
	{


	}else
	{
		let OffcanvasBottom = new bootstrap.Offcanvas( document.getElementById( 'offcanvasBottom' ) )
		OffcanvasBottom.show();

	}
}

function get_cookie ( cname ) 
{
	let name = cname + '=',

	decodedCookie = decodeURIComponent( document.cookie ),

	ca = decodedCookie.split( ';' ), c;

	for ( let i = 0; i < ca.length; i++ ) 
	{
		c = ca[i];

		while ( c.charAt( 0 ) == ' ' ) 
		{
			c = c.substring( 1 );
		}

		if ( c.indexOf( name ) == 0 ) 
		{
			return c.substring( name.length, c.length );

		}
	}

	return '';
}

function set_cookie ( cname, cvalue, exdays ) 
{
	let d = new Date();
		d.setTime( d.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );

	let expires = 'expires=' + d.toGMTString();

	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function delete_cookie ( cname ) 
{
	return document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

const animateCSS = ( element, animation, prefix = 'animate__' ) =>
	// We create a Promise and return it
new Promise( ( resolve, reject ) => 
{
	if ( document.querySelector( '#llamar_a' ) != null )
	{
		const animationName = `${ prefix }${ animation }`;
		const node = document.querySelector( element );

		node.classList.add( `${ prefix }animated`, animationName );

		// When the animation ends, we clean the classes and resolve the Promise
		function handleAnimationEnd( event ) 
		{
			event.stopPropagation();
			node.classList.remove( `${ prefix }animated`, animationName );
			resolve( 'Animation ended' );
		}

		node.addEventListener( 'animationend', handleAnimationEnd, { once: true } );
		
	}
});
