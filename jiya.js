import react, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
export class Myapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jiya: [],
    };
  }
  componentDidMount() {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        console.log('jiya1', data);
        this.setState({
          jiya: data.products,
        });
      });
  }
  renderItem = ({item, index}) => (
    console.log('jiyaaaaa', item.id),
    (
      // const kjjk = item.images.map((e)=>{
      //   console.log('lklk'.e);
      // }),
      // console.log('aaaaaa', kjjk)

      <View
        style={{
          backgroundColor: 'transparent',
          height: 150,
          width: 100,
          margin: 10,
          alignSelf: 'center',
        }}>
        {/* {item.images.map(e => {
          return (
            // console.log('lklk', e);
            <Image source={{uri: e}} style={{height: 30, width: 50}} />
          );
        })} */}
        <TouchableOpacity
          onPress={() => {
            {
              item.id === 1 ? this.RBSheet.open() : '';
            }
            console.log('nuu', item.id);
          }}>
          {item.brand === 'Apple' ? (
            <Image
              source={{
                uri: 'https://obejor.com.ng/wp-content/uploads/2023/01/iphone-14-pro-gold-back-1.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Samsung' ? (
            <Image
              source={{
                uri: 'https://img.us.news.samsung.com/us/wp-content/uploads/2022/02/09102459/Galaxy-S22-Series-2-scaled.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'OPPO' ? (
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/41EWN6EqiuL._SX300_SY300_QL70_FMwebp_.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Infinix' ? (
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/61WKwY6K0-L._SY879_.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Microsoft Surface' ? (
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/41Fc8am+xZL._SY300_SX300_.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'HP Pavilion' ? (
            <Image
              source={{
                uri: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/K/6K9J2PA-1_T1680319176.png',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Impression of Acqua Di Gio' ? (
            <Image
              source={{
                uri: 'https://assets.ajio.com/medias/sys_master/root/20230622/iPNx/64945fb7d55b7d0c63a15333/-473Wx593H-4936951370-multi-MODEL.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Royal_Mirage' ? (
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/41lR9RMs2QL._SX300_SY300_QL70_FMwebp_.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Fog Scent Xpressio' ? (
            <Image
              source={{
                uri: 'https://www.bigbasket.com/media/uploads/p/l/40046724_3-fogg-scent-xpressio-for-men.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Al Munakh' ? (
            <Image
              source={{
                uri: 'https://i.ebayimg.com/images/g/zWQAAOSw8PtieDNB/s-l500.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Lord - Al-Rehab' ? (
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2023/07/31/17/49/ai-generated-8161581_1280.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === "L'Oreal Paris" ? (
            <Image
              source={{
                uri: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Hemani Tea' ? (
            <Image
              source={{
                uri: 'https://images-cdn.ubuy.com.sa/9L8Q3Y8O-hemani-mixture-of-herbs-tea-20-bags.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Dermive' ? (
            <Image
              source={{
                uri: 'https://static.servaid.com.pk/product/bulk/509673.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'ROREC White Rice' ? (
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/41XtzAt8Z9L._SX300_SY300_QL70_FMwebp_.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Fair & Clear' ? (
            <Image
              source={{
                uri: 'https://1jne04.p3cdn1.secureserver.net/wp-content/uploads/2020/12/Fair-Clear-Cream-For-Freckles-15gm-Rs120-min.jpg?time=1691761649',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Saaf & Khaas' ? (
            <Image
              source={{
                uri: 'https://scontent.fmaa6-1.fna.fbcdn.net/v/t1.6435-9/126451470_809699069603504_3689959210953369562_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=U00vX-PDLfkAX8uqeTs&_nc_ht=scontent.fmaa6-1.fna&oh=00_AfBDYbMnHPkq5pea-cKVuTAHLf1i0bLJLtldG1KK5f-oYQ&oe=65017266',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Bake Parlor Big' ? (
            <Image
              source={{
                uri: 'https://www.alfatah.pk/cdn/shop/products/NewProject-2023-04-07T142607.521_1024x1024.png?v=1680859589',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Baking Food Items' ? (
            <Image
              source={{
                uri: 'https://www.testronixinstruments.com/backend/uploads/blog/1610446930.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'fauji' ? (
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/21v2TnJKbcL._SX300_SY300_QL70_FMwebp_.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Dry Rose' ? (
            <Image
              source={{
                uri: 'https://www.jiomart.com/images/product/original/rv71kruohr/heyon-300-gram-dry-rose-petals-dry-rose-leaves-fresh-product-images-orv71kruohr-p600922773-0-202304260606.png?im=Resize=(420,420)',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Boho Decor' ? (
            <Image
              source={{
                uri: 'https://nestasia.in/cdn/shop/products/BohemianPlanter_13_1200x.jpg?v=1616564594',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Flying Wooden' ? (
            <Image
              source={{
                uri: 'https://img.fruugo.com/product/3/10/470741103_max.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'LED Lights' ? (
            <Image
              source={{
                uri: 'https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/4711786e6148f76a597e8e5d4560ca1d/w/l/wl83-10002_6_.webp',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'luxury palace' ? (
            <Image
              source={{
                uri: 'https://parispalacehaircare.com/cdn/shop/products/IMG_8243_1_1080x.jpg?v=1627244451',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Golden' ? (
            <Image
              source={{
                uri: 'https://yourday2day.co.za/sites/default/files/product/2071.jpg',
              }}
              style={{height: 100, width: 100}}
            />
          ) : item.brand === 'Huawei' ? (
            <Image
              source={{
                uri: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p60-art/img/huawei-p60-art-kv@2x.webp',
              }}
              style={{height: 100, width: 100}}
            />
          ) : (
            <Image
              source={{uri: 'https://i.dummyjson.com/data/products/30/3.jpg'}}
              style={{height: 100, width: 100}}
            />
          )}
          <View>
            <Text
              style={{
                fontSize: 13,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              {item.brand}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  );
  _renderSheetContent() {
    let data = this.state.jiya.forEach((item, index) => {
      console.log('asdbjas', item);
      console.log('asdbjas', index);
    });

    return (
      <View
        style={{
          backgroundColor: 'black',
          height: 60,
          width: 70,
          marginTop: 10,
        }}>
        {/* {this.state.jiya.forEach(e => {
          console.log('kjdlkjsadk', e.brand);
          return <Text style={{color: 'white'}}>{'jiya'}</Text>;
        })} */}
        <Text>{'jiya'}</Text>
      </View>
    );
  }
  render() {
    return (
      <ImageBackground
        source={{
          uri: 'https://e0.pxfuel.com/wallpapers/61/426/desktop-wallpaper-splashes-of-color-miscellaneous-cool-fluorescent-paint-color.jpg',
        }}
        style={styles.imageBackground}>
        <View style={{alignItems: 'center'}}>
          <FlatList
            data={this.state.jiya}
            renderItem={this.renderItem}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height="400"
            duration={250}
            animationType={'fade'}
            closeOnDragDown
            dragFromTopOnly
            // customStyles={{
            //   container: {
            //     borderTopRightRadius: 15,
            //     borderTopLeftRadius: 15,
            //     backgroundColor: 'white',
            //   },
            //   wrapper: {
            //     // backgroundColor: 'transparent',
            //   },
            //   draggableIcon: {
            //     backgroundColor: '#fff',
            //   },
            // }}
          >
            {this._renderSheetContent()}
          </RBSheet>
          {/* <Text style={{fontSize: 16, color: 'white'}}>{data.brand}</Text> */}
        </View>
        {/* </View> */}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'Transparent',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 500,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
});
export default Myapp;
