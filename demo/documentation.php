<html>
<head>
<title>Wilson Block</title>

<script src="../_assets/jquery-1.9.1.min.js"></script>
<script src="../wilsonblock.js" type="text/javascript"></script>
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
<link rel="stylesheet" href="_assets/doc.css">
</head>
<body>

<div id="content">

	<span class="wilson-window" id="titleWilson">
		<div>
			<h1>-WilsonBlock</h1>
			<span class="wilson-quote">a simple html div carousel</span>
		</div>
		
		<div>
			<h2>So what ?</h2>
			<ul>
				<li>Easy to use and install on pages.</li>
				<li>automatically slide between slides.</li>
				<li>choose from wilson themes to stylize.</li>
				<li>Download with jQuery included or not.</li>
			</ul>
		</div>
		
		<div>
			<h1>Try it out!</h1>
		</div>
	</span>
	
	<div id="nav">
		<a href="javascript:scrollBottom();">Download</a>
		<a href="#documentation">Documentation</a>
		<a href="#git">Git</a>
		<a href="javascript:scrollBottom();">About</a>
	</div>
	
	<div id="documentation">
		<h2>How to use</h2>
		
		<h3>The Html</h3>
		
		<pre class="prettyprint lang-html" id="htmlScript"><?php echo htmlentities("
<span class='wilson-window' id='yourWilsonTag'>
  
  <!--Each slide has it's own div -->
  <div><h1>This Slide</h1></div>
  <div><h2>That slide</h2></div>
  
</span>");?>
		</pre>
		
		<h3>The Js</h3>
		
		<pre class="prettyprint lang-javascript">
var wilson = new WilsonBlock(
  "yourWilsonTag", //id of span with class wilson-window
  "classOn", //Class when slide is in view
  "classOff", //Class when slide is hidden	
);

//$$$Auto Slide$$$//
//Arg = milliseconds between slides
//Default is 3
wilson.autoSlide(9001);

//$$$Pointers$$$//
//Each arg is the text the pointers will have
//Default is ("<", ">")
wilson.pointerCreate(
  "pre",  //Previous pointer text
  "next"  //Next pointer text
);

	
		</pre>	
		
		<h2>The Methods</h2>
		
		<h3><pre class="prettyprint lang-javascript">.autoSlide((int) miliseconds)</pre></h3>
				
		<span class='wilson-window' id='autoSlideWilson'>
  
		  <div><h1>This Slide</h1></div>
		  <div><h1>That slide</h1></div>
		  
		</span>
				
		<h3><pre class="prettyprint lang-javascript">.createPointers((str) "pre", (str) "next")</pre></h3>
		
		<span class='wilson-window' id='pointerWilson'>
  
		  <div><h1>This Slide</h1></div>
		  <div><h1>That slide</h1></div>
		  
		</span>
		
		<h3><pre class="prettyprint lang-javascript">.setSlide((int) slideNumber=2)</pre></h3>
		<span class='wilson-window' id='setWilson'>
  
		  <div><h1>This Slide</h1></div>
		  <div><h1>That slide</h1></div>
		  
		</span>
		
		<h2>Download</h2>
		<div id="download">			
			<a href="_assets/wilsonblock.nojquery.zip">No jQuery</a>
			<a href="_assets/wilsonblock.zip">With jQuery</a>
			
		</div>
		
	</div>
</div>

<div id="about-footer">
	<h2>About </h2>
	
	<img src="_assets/WaveyMe.jpg">
	<span>Hi I'm Chuck, I created WilsonBlock. It's named after a block in Chicago just north of my last place. Visit some of the links and feel free to expand, use, or fork this project. Best.</span>
	<a href="http://chuckfairy.com/resume.php">Me</a>
	<a href="#">Github</a>

</div>

<script>
var titleWilson = new WilsonBlock("titleWilson", "wohmanOn", "wohmanOff");
titleWilson.createPointers();

var autoSlideWilson = new WilsonBlock("autoSlideWilson");
autoSlideWilson.autoSlide(3000);

var pointerWilson = new WilsonBlock("pointerWilson");
pointerWilson.createPointers("pre", "next");

var setWilson = new WilsonBlock("setWilson");
setWilson.setSlide(2);

function scrollBottom() {
	$("body").animate({scrollTop: $("body")[0].scrollHeight}, 1000);
}

</script>
</body>
</html>
