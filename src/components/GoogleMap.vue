<template>
	<div style='overflow:hidden;height:440px;width:600px;'>
		<div id='gmap_canvas' style='height:440px;width:600px;'></div>
	</div>
</template>

<script>
// function init_map(){
// 	const position = new google.maps.LatLng(51.3320595,0.1863989999999376);
// 	const myOptions = {
// 		zoom:13,
// 		center: position,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};
// 	const map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
// 	const marker = new google.maps.Marker({ map, position });
// 	const infowindow = new google.maps.InfoWindow({content:'<strong>The Darenth</strong><br>Station Road, Shoreham, Kent<br>'});
// 	infowindow.open(map,marker);
// }
// google.maps.event.addDomListener(window, 'load', init_map);

export default {
  name: 'Button',
  props: []
}
</script>

<style lang="scss">
	#gmap_canvas img{max-width:none!important;background:none!important}
</style>

