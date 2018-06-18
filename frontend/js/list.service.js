(function() {
  'use strict';

  angular.module('linagora.esn.emoticon').factory('esnEmoticonList', esnEmoticonList);

  function esnEmoticonList() {
    return ('grinning,beaming_with_smiling_eyes,with_tears_of_joy,grinning_with_big_eyes,' +
    'grinning_with_smiling_eyes,grinning_with_sweat,grinning_squinting,winking,smiling_with_smiling_eyes,' +
    'savoring_food,smiling_with_sunglasses,smiling_with_heart_eyes,blowing_a_kiss,kissing,' +
    'kissing_with_smiling_eyes,kissing_with_closed_eyes,smiling,neutral,expressionless,without_mouth,' +
    'smirking,persevering,sad_but_relieved,with_open_mouth,hushed,sleepy,tired,sleeping,relieved,' +
    'with_tongue,winking_with_tongue,squinting_with_tongue,unamused,downcast_with_sweat,pensive,confused,' +
    'astonished,confounded,disappointed,worried,with_steam_from_nose,crying,loudly_crying,' +
    'frowning_with_open_mouth,anguished,fearful,weary,grimacing,anxious_with_sweat,screaming_in_fear,' +
    'flushed,dizzy,pouting,angry,with_medical_mask,smiling_with_halo,smiling_with_horns,angry_with_horns,' +
    'ogre,goblin,skull,ghost,alien,alien_monster,pile_of_poo,grinning_cat,grinning_cat_with_smiling_eyes,' +
    'cat_with_tears_of_joy,smiling_cat_with_heart_eyes,cat_with_wry_smile,kissing_cat,weary_cat,' +
    'crying_cat,pouting_cat,see_no_evil_monkey,hear_no_evil_monkey,speak_no_evil_monkey,baby,boy,girl,' +
    'man,woman,old_man,old_woman,police_officer,guard,construction_worker,princess,person_wearing_turban,' +
    'man_with_chinese_cap,blond_haired_person,bride_with_veil,baby_angel,santa_claus,person_frowning,' +
    'person_pouting,person_gesturing_no,person_gesturing_ok,person_tipping_hand,person_raising_hand,' +
    'person_bowing,person_getting_massage,person_getting_haircut,person_walking,person_running,' +
    'woman_dancing,people_with_bunny_ears,person_taking_bath,bust_in_silhouette,busts_in_silhouette,' +
    'horse_racing,snowboarder,person_surfing,person_rowing_boat,person_swimming,person_biking,' +
    'person_mountain_biking,man_and_woman_holding_hands,two_men_holding_hands,two_women_holding_hands,' +
    'kiss,couple_with_heart,family,flexed_biceps,backhand_index_pointing_left,' +
    'backhand_index_pointing_right,index_pointing_up,backhand_index_pointing_up,' +
    'backhand_index_pointing_down,victory_hand,raised_hand,ok_hand,thumbs_up,thumbs_down,raised_fist,' +
    'oncoming_fist,waving_hand,clapping_hands,open_hands,raising_hands,folded_hands,nail_polish,ear,nose,' +
    'footprints,eyes,tongue,mouth,kiss_mark,heart_with_arrow,red_heart,beating_heart,broken_heart,' +
    'two_hearts,sparkling_heart,growing_heart,blue_heart,green_heart,yellow_heart,purple_heart,' +
    'heart_with_ribbon,revolving_hearts,heart_decoration,love_letter,zzz,anger_symbol,bomb,collision,' +
    'sweat_droplets,dashing_away,dizzy_face,speech_balloon,thought_balloon,glasses,necktie,t_shirt,jeans,' +
    'dress,kimono,bikini,womans_clothes,purse,handbag,clutch_bag,school_backpack,mans_shoe,running_shoe,' +
    'high_heeled_shoe,womans_sandal,womans_boot,crown,womans_hat,top_hat,graduation_cap,lipstick,ring,' +
    'gem_stone,monkey,monkey_face,dog,dog_face,poodle,wolf,cat,cat_face,tiger,tiger_face,leopard,horse,' +
    'horse_face,cow,ox,water_buffalo,cow_face,pig,pig_face,boar,pig_nose,ram,ewe,goat,camel,' +
    'two_hump_camel,elephant,mouse,mouse_face,rat,hamster,rabbit,rabbit_face,bear,koala,panda,paw_prints,' +
    'chicken,rooster,hatching_chick,baby_chick,front_facing_baby_chick,bird,penguin,frog,crocodile,' +
    'turtle,snake,dragon,dragon_face,spouting_whale,whale,dolphin,fish,tropical_fish,blowfish,octopus,' +
    'spiral_shell,snail,bug,ant,honeybee,lady_beetle,bouquet,cherry_blossom,white_flower,rose,hibiscus,' +
    'sunflower,blossom,tulip,seedling,evergreen_tree,deciduous_tree,palm_tree,cactus,sheaf_of_rice,herb,' +
    'four_leaf_clover,maple_leaf,fallen_leaf,leaf_fluttering_in_wind,grapes,melon,watermelon,tangerine,' +
    'lemon,banana,pineapple,red_apple,green_apple,pear,peach,cherries,strawberry,tomato,eggplant,' +
    'ear_of_corn,mushroom,chestnut,bread,meat_on_bone,poultry_leg,hamburger,french_fries,pizza,cooking,' +
    'pot_of_food,bento_box,rice_cracker,rice_ball,cooked_rice,curry_rice,steaming_bowl,spaghetti,' +
    'roasted_sweet_potato,oden,sushi,fried_shrimp,fish_cake_with_swirl,dango,soft_ice_cream,shaved_ice,' +
    'ice_cream,doughnut,cookie,birthday_cake,shortcake,chocolate_bar,candy,lollipop,custard,honey_pot,' +
    'baby_bottle,hot_beverage,teacup_without_handle,sake,wine_glass,cocktail_glass,tropical_drink,' +
    'beer_mug,clinking_beer_mugs,fork_and_knife,kitchen_knife,globe_showing_europe_africa,' +
    'globe_showing_americas,globe_showing_asia_australia,globe_with_meridians,map_of_japan,volcano,' +
    'mount_fuji,house,house_with_garden,office_building,japanese_post_office,post_office,hospital,bank,' +
    'hotel,love_hotel,convenience_store,school,department_store,factory,japanese_castle,castle,wedding,' +
    'tokyo_tower,statue_of_liberty,church,fountain,tent,foggy,night_with_stars,sunrise_over_mountains,' +
    'sunrise,cityscape_at_dusk,sunset,bridge_at_night,hot_springs,milky_way,carousel_horse,ferris_wheel,' +
    'roller_coaster,barber_pole,circus_tent,locomotive,railway_car,high_speed_train,bullet_train,train,' +
    'metro,light_rail,station,tram,monorail,mountain_railway,tram_car,bus,oncoming_bus,trolleybus,' +
    'minibus,ambulance,fire_engine,police_car,oncoming_police_car,taxi,oncoming_taxi,automobile,' +
    'oncoming_automobile,sport_utility_vehicle,delivery_truck,articulated_lorry,tractor,bicycle,bus_stop,' +
    'fuel_pump,police_car_light,horizontal_traffic_light,vertical_traffic_light,construction,anchor,' +
    'sailboat,speedboat,ship,airplane,seat,helicopter,suspension_railway,mountain_cableway,' +
    'aerial_tramway,rocket,hourglass_done,hourglass_not_done,watch,alarm_clock,twelve_oclock,' +
    'twelve_thirty,one_oclock,one_thirty,two_oclock,two_thirty,three_oclock,three_thirty,four_oclock,' +
    'four_thirty,five_oclock,five_thirty,six_oclock,six_thirty,seven_oclock,seven_thirty,eight_oclock,' +
    'eight_thirty,nine_oclock,nine_thirty,ten_oclock,ten_thirty,eleven_oclock,eleven_thirty,new_moon,' +
    'waxing_crescent_moon,first_quarter_moon,waxing_gibbous_moon,full_moon,waning_gibbous_moon,' +
    'last_quarter_moon,waning_crescent_moon,crescent_moon,new_moon_face,first_quarter_moon_face,' +
    'last_quarter_moon_face,sun,full_moon_face,sun_with,star,glowing_star,shooting_star,cloud,' +
    'sun_behind_cloud,cyclone,rainbow,closed_umbrella,umbrella_with_rain_drops,high_voltage,snowflake,' +
    'snowman_without_snow,fire,droplet,water_wave,jack_o_lantern,christmas_tree,fireworks,sparkler,' +
    'sparkles,balloon,party_popper,confetti_ball,tanabata_tree,pine_decoration,japanese_dolls,' +
    'carp_streamer,wind_chime,moon_viewing_ceremony,ribbon,wrapped_gift,ticket,trophy,soccer_ball,' +
    'baseball,basketball,american_football,rugby_football,tennis,bowling,flag_in_hole,fishing_pole,' +
    'running_shirt,skis,direct_hit,pool_,crystal_ball,video_game,slot_machine,game_die,spade_suit,' +
    'heart_suit,diamond_suit,club_suit,joker,mahjong_red_dragon,flower_playing_cards,performing_arts,' +
    'artist_palette,muted_speaker,speaker_low_volume,speaker_medium_volume,speaker_high_volume,' +
    'loudspeaker,megaphone,postal_horn,bell,bell_with_slash,musical_score,musical_note,musical_notes,' +
    'microphone,headphone,radio,saxophone,guitar,musical_keyboard,trumpet,violin,mobile_phone,' +
    'mobile_phone_with_arrow,telephone,telephone_receiver,pager,fax_machine,battery,electric_plug,' +
    'laptop_computer,computer_disk,floppy_disk,optical_disk,dvd,movie_camera,clapper_board,television,' +
    'camera,video_camera,videocassette,magnifying_glass_tilted_left,magnifying_glass_tilted_right,' +
    'light_bulb,flashlight,red_paper_lantern,notebook_with_decorative_cover,closed_book,open_book,' +
    'green_book,blue_book,orange_book,books,notebook,ledger,page_with_curl,scroll,page_facing_up,' +
    'newspaper,bookmark_tabs,bookmark,money_bag,yen_banknote,dollar_banknote,euro_banknote,' +
    'pound_banknote,money_with_wings,credit_card,chart_increasing_with_yen,currency_exchange,' +
    'heavy_dollar_sign,envelope,e_mail,incoming_envelope,envelope_with_arrow,outbox_tray,inbox_tray,' +
    'package,closed_mailbox_with_raised_flag,closed_mailbox_with_lowered_flag,' +
    'open_mailbox_with_raised_flag,open_mailbox_with_lowered_flag,postbox,pencil,black_nib,memo,' +
    'briefcase,file_folder,open_file_folder,calendar,tear_off_calendar,card_index,chart_increasing,' +
    'chart_decreasing,bar_chart,clipboard,pushpin,round_pushpin,paperclip,straight_ruler,' +
    'triangular_ruler,scissors,locked,unlocked,locked_with_pen,locked_with_key,key,hammer,pistol,wrench,' +
    'nut_and_bolt,link,microscope,telescope,satellite_antenna,syringe,pill,door,toilet,shower,bathtub,' +
    'cigarette,moai,atm_sign,litter_in_bin_sign,potable_water,wheelchair_symbol,mens_room,womens_room,' +
    'restroom,baby_symbol,water_closet,passport_control,customs,baggage_claim,left_luggage,warning,' +
    'children_crossing,no_entry,prohibited,no_bicycles,no_smoking,no_littering,non_potable_water,' +
    'no_pedestrians,no_mobile_phones,no_one_under_eighteen,up_arrow,up_right_arrow,right_arrow,' +
    'down_right_arrow,down_arrow,down_left_arrow,left_arrow,up_left_arrow,up_down_arrow,left_right_arrow,' +
    'right_arrow_curving_left,left_arrow_curving_right,right_arrow_curving_up,right_arrow_curving_down,' +
    'clockwise_vertical_arrows,counterclockwise_arrows_button,back_arrow,end_arrow,on_arrow,soon_arrow,' +
    'top_arrow,dotted_six_pointed_star,aries,taurus,gemini,cancer,leo,virgo,libra,scorpio,sagittarius,' +
    'capricorn,aquarius,pisces,ophiuchus,shuffle_tracks_button,repeat_button,repeat_single_button,' +
    'play_button,fast_forward_button,reverse_button,fast_reverse_button,upwards_button,fast_up_button,' +
    'downwards_button,fast_down_button,cinema,dim_button,bright_button,antenna_bars,vibration_mode,' +
    'mobile_phone_off,recycling_symbol,trident_emblem,name_badge,japanese_symbol_for_beginner,' +
    'heavy_large_circle,white_heavy_check_mark,ballot_box_with_check,heavy_check_mark,' +
    'heavy_multiplication_x,cross_mark,cross_mark_button,heavy_plus_sign,heavy_minus_sign,' +
    'heavy_division_sign,curly_loop,double_curly_loop,part_alternation_mark,eight_spoked_asterisk,' +
    'eight_pointed_star,sparkle,double_exclamation_mark,exclamation_question_mark,question_mark,' +
    'white_question_mark,white_exclamation_mark,exclamation_mark,wavy_dash,c_copyright,r_registered,' +
    'tm_trade_mark,keycap_hash,keycap_zero,keycap_one,keycap_two,keycap_three,keycap_four,keycap_five,' +
    'keycap_six,keycap_seven,keycap_eight,keycap_nine,keycap_ten,hundred_points,input_latin_uppercase,' +
    'input_latin_lowercase,input_numbers,input_symbols,input_latin_letters,a_button_blood_type,' +
    'ab_button_blood_type,b_button_blood_type,cl_button,cool_button,free_button,i_information,id_button,' +
    'm_circled_m,new_button,ng_button,o_button_blood_type,ok_button,p_button,sos_button,up_button,' +
    'vs_button,japanese_here_button,japanese_service_charge_button,japanese_monthly_amount_button,' +
    'japanese_not_free_of_charge_button,japanese_reserved_button,japanese_bargain_button,' +
    'japanese_discount_button,japanese_free_of_charge_button,japanese_prohibited_button,' +
    'japanese_acceptable_button,japanese_application_button,japanese_passing_grade_button,' +
    'japanese_vacancy_button,zhu_japanese_congratulations_button,mi_japanese_secret_button,' +
    'japanese_open_for_business_button,japanese_no_vacancy_button,black_small_square,white_small_square,' +
    'white_medium_square,black_medium_square,white_medium_small_square,black_medium_small_square,' +
    'black_large_square,white_large_square,large_orange_diamond,large_blue_diamond,small_orange_diamond,' +
    'small_blue_diamond,red_triangle_pointed_up,red_triangle_pointed_down,diamond_with_a_dot,' +
    'radio_button,black_square_button,white_square_button,white_circle,black_circle,red_circle,' +
    'blue_circle,chequered_flag,triangular_flag,crossed_flags,china,germany,spain,france,united_kingdom,' +
    'italy,japan,south_korea,russia,united_states').split(',');
  }
})();
