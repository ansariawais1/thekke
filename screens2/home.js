import {View,Text, Button, ScrollView,Image,TouchableOpacity, TextInput,Modal,Pressable} from 'react-native'
import React,{useEffect,useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import CSS,{colors,vw,vh} from './style/style'
import { CardStyleInterpolators,useHeaderHeight } from '@react-navigation/stack';
import {BoxShadow} from 'react-native-shadow'
import {MasalaDetail} from './masalaDetailPage'
import ImageSlider from 'react-native-image-slider';
import { MasalaAndSpice } from './masalaSpicePage';
import { newPickleData } from './data/data';
// ₹

export const Home=({navigation,route})=>{
const [cartItems,addCartItem]=useState(0)
const Stack=createStackNavigator()

    return(
        
        <Stack.Navigator>
            <Stack.Screen name="HomeHeader" component={HomeHeader} options={{
                title:<View style={CSS.headerTitle}><Image style={CSS.headerImage} source={require('./images/main/thekke.png')} /></View>,
                headerStyle:{
                    backgroundColor:colors.green,
                },
                headerRight:()=>(
                    <View style={{flexDirection:"row",marginRight:5}}>
                        <Image style={CSS.headerIcon} source={require('./images/main/loupe.png')} />
                        <Image style={CSS.headerIcon} source={require('./images/main/bell.png')} />
                        <View>
                            <Image style={CSS.headerIcon} source={require('./images/main/shopping-cart.png')} />
                            <View style={{backgroundColor:"red",width:12,height:12,position:"absolute",bottom:-4,left:4,borderRadius:10}}>
                                <Text style={{fontSize:8,textAlign:"center",color:"white"}}>{cartItems}</Text>
                            </View>
                        </View>
                    </View>
                )
            }} />
            <Stack.Screen  name="Masala and Spice" component={MasalaAndSpice} 
            
            options={{
                headerTitleAlign:"left",
                headerLeft:()=>(
                    <View >
                        <TouchableOpacity 
                            style={{flexDirection:"row",alignItems:"center"}}
                            onPress={() => {
                            navigation.navigate(HomeHeader)}}>
                            <Image style={{marginLeft:10,width:30,height:30,right:0}} source={require('./images/main/smallThekkelogo.png')} />
                            <Image
                                source={require('./images/back.png')}
                                style={{width:20,height:20,right:0,tintColor:"white"}}/>
                        </TouchableOpacity>
                    </View>
                ),
                headerRight:()=>(
                    <View style={{flexDirection:"row",marginRight:10}}>
                        <View>
                            <Image style={CSS.headerIcon} source={require('./images/main/shopping-cart.png')} />
                            <View style={{backgroundColor:"red",width:12,height:12,position:"absolute",bottom:-4,left:4,borderRadius:10}}>
                                <Text style={{fontSize:8,textAlign:"center",color:"white"}}>{cartItems}</Text>
                            </View>
                            
                        </View>
                        <Image style={{width:18,height:18,tintColor:"white",marginHorizontal:7}} source={require('./images/main/loupe.png')} />
                    </View>
                ),
                headerTintColor:"white",
                headerStyle:{backgroundColor:colors.green,elevation: 0,shadowOpacity: 0},
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Stack.Screen name="Masala Details" component={MasalaDetail}
            
            options={{
                headerStyle:{
                    backgroundColor:colors.green,elevation: 0,shadowOpacity: 0,
                },

                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            />
        </Stack.Navigator>
        
    )
}






const HomeHeader=({navigation})=>{
    const imagesArray=[
        require('./images/main/slide1.jpg'),
        require('./images/main/slide2.jpg')
      ]
    return(
        <ScrollView style={CSS.Screen} style={{backgroundColor:"white",flex:1}} >
            <View style={CSS.Screen} >
                <View style={CSS.container}> 
                    <Text style={CSS.greetText}>Hi Thekke India</Text>
                    <View>
                        <ImageSlider autoPlayWithInterval={7000} style={CSS.slider} images={imagesArray} ></ImageSlider>
                    </View>
                    <View style={{marginVertical:10,marginLeft:4}}><Text style={CSS.boldText}>Our Exclusive Categories</Text></View>
                    <View style={CSS.row} >
                        <View style={CSS.col} >
                            <TouchableOpacity onPress={()=>{navigation.navigate('Masala and Spice',{name:"Masala and spice"})}}>
                                <ShadowBox  logoImage={require('./images/main/masalaLogo.png')} name="Masala and Spices"  styleName={CSS.colCard} position="Left"/>
                            </TouchableOpacity>
                        </View>
                        <View style={CSS.col} > 
                            <TouchableOpacity onPress={()=>{navigation.navigate('Masala and Spice',{name:'Edible Oil'}) 
                            }}>
                                <ShadowBox logoImage={require('./images/main/edibleoil.png')} name="Edible Oil" styleName={CSS.colCard} position="Right"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={CSS.row} >
                        <View style={CSS.col} >
                            <TouchableOpacity onPress={()=>{navigation.navigate('Masala and Spice',{name:'Ghee'})
                            }} >
                                <ShadowBox logoImage={require('./images/main/ghee.png')}  name="Ghee" styleName={CSS.colCard} position="Left"/>
                            </TouchableOpacity>
                        </View>
                        <View style={CSS.col} > 
                            <TouchableOpacity onPress={()=>{navigation.navigate('Masala and Spice',{name:'Pickles'})
                            }}>
                                <ShadowBox logoImage={require('./images/main/pickleLogo.png')} name="Pickles" styleName={CSS.colCard} position="Right"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={CSS.row} >
                        <View style={CSS.col} > 
                            <TouchableOpacity onPress={()=>{navigation.navigate('Masala and Spice',{name:'Snacks'})
                            }}>
                                <ShadowBox logoImage={require('./images/main/snacks.png')} name="Snacks" styleName={CSS.colCard} position="Left"/>
                            </TouchableOpacity>
                        </View>
                        <View style={CSS.col} > 
                            <TouchableOpacity onPress={()=>{navigation.navigate('Masala and Spice',{name:'Fruit and vegetable'})
                            }}>
                                <ShadowBox logoImage={require('./images/main/fruits.png')} name="Fruit and vegitable" styleName={CSS.colCard} position="Right"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </View>

        <View style={{margin:10,marginLeft:27}}><Text style={CSS.boldText}>Newly added Product</Text></View>
        <ScrollView horizontal={true} style={{flex:1,paddingRight:20}}>
            <View>
                <View style={{marginLeft:-2}} >
                    <View style={{ display:"flex",flexDirection:"row"}} >
                        {
                            newPickleData.map((list,index)=>(
                        <ShadowBox listData={list} marginLeft={30} status="new" key={index} styleName={CSS.colCard} height={140}  width={40} position="New"
                        imageUrl={list.imageUrl} 
                        />
                        ))
                        }
                        <View style={{width:30}}></View>
                    </View> 
                </View>
            </View>
          
        </ScrollView>
    </ScrollView>
    )
}



// this block of code will generate a shadobox container will accept prop as names and types


const ShadowBox=(prop)=>{
    
    var setting={
        width:vw(35),
        height:130,
        color:"#000",
        border:13,
        radius:5,
        opacity:0.2,
        x:0,
        y:0,
        style:{marginVertical:10}
    }    
    if(prop.position==="Left"){
        setting.radius=2,
        setting.x=8
        setting.y=7
        setting.height=170
    }
    else if(prop.position==="Right"){
        setting.radius=2,
        setting.x=10
        setting.y=7
        setting.height=170

    }
    else if(prop.position==="Center"){
        setting.x=2
        setting.y=2
        setting.width=vw(40)-4
        setting.height=140-4
        setting.border=10
        setting.radius=6

    }
    else if(prop.position==="New"){
        setting.x=2
        setting.y=2
        setting.width=vw(40)-4
        setting.height=140-4
        setting.border=10
        setting.radius=6
      setting.height=182   
    }
return(
<View style={{marginLeft:prop.marginLeft}}>
    <BoxShadow setting={setting}>
        <View style={{width:vw(40),backgroundColor:"#fff",borderRadius:5,overflow:"hidden",paddingBottom:10}}>
            {prop.status==="new"?
            <View style={{paddingHorizontal:6,paddingVertical:3,width:43,borderBottomRightRadius:10,backgroundColor:colors.green}}>
                <Text style={{fontSize:12,color:"white"}}>New!</Text>
            </View>:<></>
}
{   prop.listData !== undefined?
            <View style={{paddingHorizontal:10}}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Image style={{width:100,height:100}} source={require('./images/pickle.png')} />
                </View>
                <View>
                    <Text style={{fontSize:12,color:"gray"}}>{prop.listData.type}</Text>
                    <Text style={{color:"gray"}} numberOfLines={1} ellipsizeMode='tail'>{prop.listData.name}</Text>
                    <Text style={{color:colors.green}}>{prop.listData.weigth} | {prop.listData.price}</Text>
                </View>
            </View>:
            <View style={{backgroundColor:"white",padding:10,justifyContent:"center",alignItems:"center",height:170}}>
                <View style={{marginVertical:15}}>
                    <Image style={{width:70,height:70}} source={prop.logoImage} />
                </View>
                <View style={{width:"80%",marginVertical:5}}>
                        <Text style={{textAlign:"center"}}>{prop.name}</Text>
                </View>
            </View>
}
            {/* <Image source={require(prop.imageUrl)} /> */}
        </View>
    </BoxShadow>
</View>
    )
}