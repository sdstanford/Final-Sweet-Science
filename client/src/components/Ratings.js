import React, { Component } from 'react';
import './Champions.css';

class Ratings extends Component {

    componentDidMount () {
        console.log( "test on mount" )
        document.body.classList.add( "rak-body" );
    }

    componentWillUnmount () {
        console.log( "test on unmount" )
        document.body.classList.remove( "rak-body" );
    }    
    
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                       <br/>
                        <h3 className="rat-h3">Ratings</h3>
                        <br/>
                        <form>
                            <div className="form-group">
                                <select className="form-control">
                                    <option selected="true">world</option>
                                    <option>Asia</option>
                                    <option>Africa</option>
                                    <option>Europe</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option selected="true">weight class</option>
                                    <option>heavyweight</option>
                                    <option>cruiserweight</option>
                                    <option>light heavyweight</option>
                                    <option>super middleweight</option>
                                    <option>middleweight</option>
                                    <option>super welterweight</option>
                                    <option>superlight</option>
                                    <option>lightweight</option>
                                    <option>super featherweight</option>
                                    <option>featherweight</option>
                                </select>
                            </div>
                            {/* <div className="form-group">
                                <select className="form-control">
                                    <option selected="true">male</option>
                                    <option>female</option>
                                </select>
                            </div> */}
                            <div className="form-group">
                                <select className="form-control">
                                    <option selected="true">orthodox</option>
                                    <option>southpaw</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="radio-inline"><input type="radio" name="optradio"/>Active</label>
                                <label className="radio-inline"><input type="radio" name="optradio"/>Active or Inactive</label>
                            </div>
                            <input type="submit" className="btn btn-danger" value="Go"/>
                        </form>
                    </div>
                </div>
                <div className="row" style={{marginTop: '30px'}}>
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>name</th>
                                    <th>points</th>
                                    <th></th>
                                    <th>division</th>
                                    <th>career</th>
                                    <th class="hideMob">wins-losses-draws <div style={{float:'right',marginRight:'48px'}}></div></th>
                                    <th>stance</th>
                                    <th>hometown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>1</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="boxrec.com/en/boxer/352" className="personLink">Floyd Mayweather Jr</a>
                                    </td>
                                    <td>2,248
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  welterweight
                                    </td>
                                    <td>  1996-2017
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">50 </span>&nbsp;<span className="textLost">- 0</span>&nbsp;<span className="textDraw">- 0</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">Grand Rapids</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Michigan</a>, <a href="/en/locations/event?country=MX">U.S.A.</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>2</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/9625" className="personLink">Sugar Ray Robinson</a>
                                    </td>
                                    <td>1,618
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  middleweight
                                    </td>
                                    <td>  1940-1965
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">174</span>&nbsp;<span className="textLost">- 19</span>&nbsp;<span className="textDraw">- 6</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">Vidalia</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Georgia</a>, <a href="/en/locations/event?country=MX">USA</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>3</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/9027" className="personLink">Joe Louis</a>
                                    </td>
                                    <td>1,561
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  heavyweight
                                    </td>
                                    <td>  1934-1951
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">66 </span>&nbsp;<span className="textLost">- 3</span>&nbsp;<span className="textDraw">- 2</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">LaFayette</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Alabama</a>, <a href="/en/locations/event?country=MX">U.S.A.</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>4</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/1187" className="personLink">Jack Johnson</a>
                                    </td>
                                    <td>1,482
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  heavyweight
                                    </td>
                                    <td>  1897-1931
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">56 </span>&nbsp;<span className="textLost">- 11</span>&nbsp;<span className="textDraw">- 8</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">Galveston</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Texas</a>, <a href="/en/locations/event?country=MX">U.S.A.</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>5</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/180" className="personLink">Muhammad Ali</a>
                                    </td>
                                    <td>1,480
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  heavyweight
                                    </td>
                                    <td>  1960-1981
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">56 </span>&nbsp;<span className="textLost">- 5</span>&nbsp;<span className="textDraw">- 0</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">Louisville</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Kentucky</a>, <a href="/en/locations/event?country=MX">U.S.A.</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>6</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/9036" className="personLink">Carlos Monzon</a>
                                    </td>
                                    <td>1,346
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  middleweight
                                    </td>
                                    <td>  1963-1977
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">87 </span>&nbsp;<span className="textLost">- 3</span>&nbsp;<span className="textDraw">- 9</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">San Javier</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Santa Fe</a>, <a href="/en/locations/event?country=MX">Argentina</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>7</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/80" className="personLink">Roberto Duran</a>
                                    </td>
                                    <td>1,299
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  lightweight
                                    </td>
                                    <td>  1968-2001
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">103 </span>&nbsp;<span className="textLost">- 1</span>&nbsp;<span className="textDraw">- 2</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">El Chorrillo</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Panama</a>, <a href="/en/locations/event?country=MX">Panama</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>8</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/9018" className="personLink">Henry Armstrong</a>
                                    </td>
                                    <td>1,299
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  welterweight
                                    </td>
                                    <td>  
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">152 </span>&nbsp;<span className="textLost">- 1</span>&nbsp;<span className="textDraw">- 2</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">Columbia</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Mississippi</a>, <a href="/en/locations/event?country=MX">U.S.A.</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>9</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/9046" className="personLink">Gene Tunney</a>
                                    </td>
                                    <td>1,297
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  heavyweight
                                    </td>
                                    <td>  1915-1928
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">65 </span>&nbsp;<span className="textLost">- 1</span>&nbsp;<span className="textDraw">- 1</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">New York</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">New York</a>, <a href="/en/locations/event?country=MX">U.S.A.</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>10</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/348759" className="personLink">Marvin Hagler</a>
                                    </td>
                                    <td>1,297
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  middleweight
                                    </td>
                                    <td>  1973-1987
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">62</span>&nbsp;<span className="textLost">3</span>&nbsp;<span className="textDraw">2</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>southpaw
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">Newark</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">New Jersey</a>, <a href="/en/locations/event?country=MX">U.S.A.</a>
                                        </div>                                        
                                    {/* </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>11</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/348759" className="personLink">Saul Alvarez</a>
                                    </td>
                                    <td>990
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  middleweight
                                    </td>
                                    <td>  27
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">49</span>&nbsp;<span className="textLost">1</span>&nbsp;<span className="textDraw">2</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">Guadalajara</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Jalisco</a>, <a href="/en/locations/event?country=MX">Mexico</a>
                                        </div>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>2</span>
                                    </td>
                                    <td>
                                        <a style={{float: 'left'}} href="/en/boxer/348759" className="personLink">Saul Alvarez</a>
                                    </td>
                                    <td>990
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <span className="starBase">
                                                    <span className="starRating"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>  middleweight
                                    </td>
                                    <td>  27
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <span className="textWon">49</span>&nbsp;<span className="textLost">1</span>&nbsp;<span className="textDraw">2</span>
                                        </div>
                                        <div className="rowLast6">
                                            <div style={{float: 'right'}}>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgW"></div>
                                                <div className="last6 bgD"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </td>
                                    <td>orthodox
                                    </td>
                                    <td>
                                        <div style={{float: 'left'}}>
                                            <a href="/en/locations/event?country=MX&amp;region=JAL&amp;town=10952">Guadalajara</a>, <a href="/en/locations/event?country=MX&amp;region=JAL">Jalisco</a>, <a href="/en/locations/event?country=MX">Mexico</a>
                                        </div>                                         */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ratings;