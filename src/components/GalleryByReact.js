require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

var imageDatas = [
  {
    "fileName":"1.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"2.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"3.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"4.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"5.jpg",
    "title":"1",
    "desc":"my name is 1"
  },{
    "fileName":"6.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"7.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"8.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"9.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"10.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"11.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"12.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"13.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"14.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"15.jpg",
    "title":"1",
    "desc":"my name is 1"
  },
  {
    "fileName":"16.jpg",
    "title":"1",
    "desc":"my name is 1"
  }
];

imageDatas = (function(imageDatasArr){
	for(var i=0,j=imageDatasArr.length;i<j;i++){

        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/'+singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass({
    render:function(){
        return (
            <figure className="img-figure">
                <img src={this.props.data.imageURL} alt={this.props.data.title} />
                <figcaption>
                    <h2 className="img-title">{this.props.data.desc}</h2>
                </figcaption>
            </figure>
        );
    }
})

var GalleryByReactApp = React.createClass({
    render: function(){
        var controllerUnits = [];
        var imgFigures = [];

        imageDatas.forEach(function(value){
            imgFigures.push(<ImgFigure data={value} />)
        });

        return (
            <section className="stage">
                <section className="img-sec">
                    {imgFigures}
                </section>
                <nav className="controller-nav">
                    {controllerUnits}
                </nav>
            </section>
        );
    }
})


GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
