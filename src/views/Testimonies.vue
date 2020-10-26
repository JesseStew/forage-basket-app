<template>
  <div class="testimonies">
    <v-container>
      <!-- <v-row>
        {{testimonies[0]}}
      </v-row> -->
      <v-row>
        <v-col cols="12" v-for="testimony in testimonies" :key="testimony.id">
          <v-col>
            <span v-for="condition in testimony.selectedConditions" :key="condition.id">
              {{ condition }},
            </span>
          </v-col>
          <quill-testimonies :delta="testimony.delta"></quill-testimonies>
        </v-col>
        <div class="content-view" ref="contentContainer"></div>
        <!-- <v-col cols="12" v-for="testimony in testimonies" :key="0">
          <div class="content-view" ref="contentContainer"></div>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import QuillTestimonies from '@/components/QuillTestimonies.vue';

export default {
  data() {
    return {
      content: '',
      savedContent: '',
      unsavedContent: '',
      edit: false,
      editorOption: {
        placeholder: 'Edit your post...',
        readOnly: true,
        theme: 'snow'
      },
      testimonies: [
	{
		"selectedConditions": [
			"chemotherapy side effects"
		],
		"author": "Harold C.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Harold C. 2020-03-09"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This has greatly reduced my chemo sickness. No more throwing up all day long. I am feeling stronger with more energy. I am getting another couple bottles to keep going."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"chemotherapy side effects"
		],
		"author": "Adrian R.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Adrian R. from Meridian, ID"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\". . .My mother lives in Switzerland and takes Shiaqga to help ease Chemotherapy side-effects and it has made a very clear difference.\"  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"author": "Julie B.",
		"delta": {
			"ops": [
				{
					"insert": "Julie B. from Myrtle Creek, OR (05-18-2020)",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I'm on my second bottle of SHIAQGA, and I am amazed at the positive results so far. I take dozens of high-quality supplements daily, but I've never taken a product that had me racing to the fridge each morning to take the next dose! I've battled the ravages of chronic Lyme & coinfections for 6+ years to the point of muscle wasting, paralysis, severe cognitive decline, and near death. Although, I had slowly recovered myself holistically to 85% using a laborious strict protocol and diet, I could not achieve complete wellness no matter what I did. After using SHIAQGA Super Concentrate for a short time, I am quickly seeing long sought-after improvements including more energy (walking 3 - 5 miles daily), gut healing, tissue repair, less Mast Cell reactions, and a general feeling of wellness!! I'd put myself at 90% recovered now, and I'm looking forward 100% recovery in the next few months--AND finally getting my life back!! Lyme & coinfections rapidly ages you, damages organs and tissues, causes chronic fatigue, joint and muscle pain, a host of debilitating neurological issues. I can literally feel my organs & tissues healing and repairing daily. I only wish I had known about SHIAQGA Super Concentrate sooner--it could have saved me years of my life suffering while researching like a mad scientist and endless trial and errors to find something to heal my body. Once I am completely healed, I will continue on the maintenance dose for life of this AMAZING, mind-blowing product!! PS: It tastes GREAT!! My body craves it. I love SHIAQGA!!♡♡♡ \" ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"infections"
		],
		"isArticle": false
	},
	{
		"author": "Carolyne S.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Carolyne S. from Oakland, California"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "“I have been diagnosed in the past couple of years with diabetes and thyroid problems and I have been having issues with headaches, and concentration and dizziness and all kinds of things...and I have been trying to avoid taking medicines and taking insulin, I have type 2 diabetes, what they call diabetes, but I’ve been taking pills and still not seeing results that I wanted. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "About 2 months ago a friend . . . heard about what I was going through and recommended it to me, so I immediately ordered the Shiaqga. . . The 1st thing, I was able to decrease my insulin pills in the first month. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "By the end of the second month I had noticed that I had lost about 7 pounds. . . I did take it in the morning and in the evening and seven pound had just dropped off of me drastically... ...another thing, I had been having problems with my blood pressure and hypertension with the diabetes and the blood pressure has been very high for a long time.  Frightening, as a matter of fact. . . and yesterday on the 5th, they had been taking my blood pressure and my blood pressure was 108 over 80!  I haven’t had a reading like that in YEARS! "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I know it’s the Shiaqga. . . The lump on my thyroid is  going down and I was so stunned it’s going down, it’s going down so much , if you could see it was protruding and now I can barely touch it and  you could feel it there and I’m so happy,  thank you all for just being there.  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you all for doing what you are doing, it is really healing my body. . . It’s amazing, it’s amazing!  I’m a witness; I’m definitely a witness of what Shiaqga does.\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"diabetes"
		]
	},
	{
		"isArticle": false,
		"author": "Frank G.",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Frank G. 2019-09-17"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I gave this bottle to my sister for her to test out. Her health has improved like mine did. She will now be ordering for herself."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Teresa M.",
		"delta": {
			"ops": [
				{
					"insert": "Teresa M. 2019-11-07",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I took the whole four month money back guarantee serious and gave it a try. I am in good health but wanted to keep it that way. Being already in good health, I really I did not clue in that things were getting better for the first two months. It was only after I was into my third bottle that I notice two major things were definitely different and great things were going on. The first was the flu that went through work that everyone got. I did not get it at all and not feeling sick for a few days is well worth the money spent. :) The next thing was my time of the month -- it surprised me since I did not get the soreness a couple days before and it was the gentlest period I have ever had. (Very strange to me to get from a stem cell product.)",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"viruses"
		]
	},
	{
		"selectedConditions": [
			"blood pressure"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "E. Thompson from Anderson, IN "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"I just have to tell you that I am so excited & pleased since the first . . . Shiaqga that I took.  My blood pressure dropped from 148/64 to 125/54 & my brain fog cleared in a very short time!  My breathing is even improved – breathing deeper, with a feeling of wellness that I thought long gone! "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "       ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I thank God for who formulated this wonderful product & for the person who made sure that I tried it.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "E. Thompson",
		"isArticle": false
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"ears",
			"energy"
		],
		"author": "T. Whitaker",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "T. Whitaker from Kaysville, UT"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I took only a daily dose and it relieved an earache that I had for three months.  I had a virus and it left me with an earache that was very miserable and painful.  It felt like an inner ear infection or block. . . I could hear again! ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I was so thrilled I could not believe it.  I have also had a ringing in the ear for years and the ringing in the ear has just quit it went away.  I know this has all been sinus related and I am so grateful to you for such a wonderful product.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I also have experienced more energy.  I now have my energy back and I am not a couch potato at night. "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I have a ruptured disk in my back and I am starting to do things that I have not been able to do for years. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I have only used ½ a bottle so far and it has been just great.  Thank you so much for this great product.  I can’t ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "Thank You",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": " enough for this great product",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": ".",
					"attributes": {
						"color": "#2a2a2a",
						"italic": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thanks again\""
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"blood pressure"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "GW S. 2020-01-22"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This was our first purchase so we are still waiting and watching to see how it works on the dogs. Both are German Shepherds. One has breast cancer and the other is going blind from high altitude. The one with cancer will not eat the ground shiaqga inside meatballs or anything so we give her the liquid, 3cc once a day. The other one will eat the ground shiaqga in the meatballs so she gets quarter teaspoon in each of 3 meatballs two times a day. She still does not like it much, picks at it so when the ground is gone will put her on the liquid provided we can still afford it.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I started taking 3 droppers in water when we first got it and it was not long that I could cut my blood pressure medicine in half. I am looking forward to stopping it all the way.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "We believe this product will be super beneficial in the long run. We would take more if we could afford to buy more."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Keep the great product coming. Thank you.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "GW S."
	},
	{
		"author": "Theresa W.",
		"selectedConditions": [
			"sores/open wound on body"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Theresa W. from Grovetown, GA"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"When I heard about the Shiaqga, I wasn’t sure if it was something I would try or not.  I have had quite a few health issues in my lifetime, and as you know, they just keep adding up the older you get."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I’ve had migraines since I was about 9 years old, and that was something I wasn’t sure that Shiaqga even dealt with.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was diagnosed with Hypothyroidism about 5 or 6 years ago. This was changed to a diagnosis of Hashimoto’s Disease, when further testing showed the extent of my thyroid problems."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Two or three years ago, my primary care doctor sent me to a Rheumatologist, due to my having trouble sleeping and being in constant pain.  The Rheumatologist did a few “hands on” tests, and immediately said, “Fibromyalgia”.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "My first thought was, “Oh, great!  Now what!” I had heard of this disease before, and was now aware as to why I seemed to get sick all the time.  I was working in the medical field, as an MA and would catch every little thing that came along.  Fibromyalgia is an AutoImmune disease and now I knew “why” my immune system didn’t seem to protect me from much.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I was later sent for sleep studies, and it was discovered that I never really fell into a deep sleep, and therefore was “always” tired. These sleep studies were run, due to seizures that I was experiencing in my sleep.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "As you guessed by now, I was placed on several different medications during this time and the cost alone, were outlandish!  The side effects were a “whole ‘nother story”, so to speak.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Daily functions of living were becoming more and more of a hassle and I was living in a “fog” of sorts.  My Rheumo doctor called it “Fibro-fog”.  All I knew, was that I didn’t want any more to do with it, or the “hot pins” pain in my neck, shoulders, shoulder blades, back, etc… anymore."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Then I found Shiaqga!  The first thing I noticed, was that the “fog” became less and less, and I was actually “awake” all day long!  Next, I discovered that my sleep patterns seemed to level out and I actually awoke in the mornings feeling refreshed!  The pain has lightened. No more headaches every day, and the skin cancer on my nose even seems to be fading away!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Wow! I haven’t been “sick” with anything more than the sniffles for the past 6 months!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "A kitten had been playing with my arm, and scratched it. I ended up with a hole being eaten away in my arm, from a fungal/bacterial infection that set in to the puncture wound. The fact that it hadn’t spread all over my body amazed my primary care provider, and the only thing different in my system was the Shiaqga!  I put the Shiaqga directly onto the wound. Within 3 days, the hole was completely closed and “new” skin was even growing back.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Roderick B. 2019-02-27"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My first bottle of Shiaqga shipped in 3 days, excellent! The smell and the tast are fantastic!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Organic & Wildcrafted means a lot to me as well as enhancing my Immune System 4000x!! Shiaqga is a keeper in my Wellness Program for me and my clients!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Roderick B.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Dan P. 2019-06-07",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "It was in month two that I really started seeing the improvements to my health. Great product!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Dan P.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": false
	},
	{
		"selectedConditions": [
			"viruses"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Karla M. 2019-04-05"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Have not been without shiaqga since I discovered it last year. Shared the info with friends and ended up ordering over 30 bottles for them..also have a daughter working in the medical field and she takes it on a regular basis to protect her catching something from her patients. Best defense available!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Karla M."
	},
	{
		"isArticle": false,
		"author": "Anne B.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Anne B. 2019-02-01"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have been taking Shiaqga for about a month now. During this time I can say that I haven’t been sick, my allergies seem to be less troublesome.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "The taste is great!"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have taken other supplements and because of the taste haven’t continued, they taste like dirt! The pleasant taste of peppermint it nice!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I plan on continuing with Shiaqga and will recommend it to my friends and family."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"seasonal allergies"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Alison R. from Holden, Utah"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\". . . products have been wonderful addition to my stash of preventative medicines.  They have even cured an acute attack of mono my daughter was having.  Shiaqga is the best. "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "She tested positive and then tested negative.  The doctor said it must have been a false positive. "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "The University of Utah calls her to donate blood for the neonate unit because she has no viruses in her blood.  I am sure it was the three months of Shiaqga she took.\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"mono"
		],
		"isArticle": false,
		"author": "Alison R."
	},
	{
		"author": "​Brigitte S.",
		"selectedConditions": [
			"non-hodgkins lymphoma"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Brigitte S. 2019-09-18"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "We all use this amazing product at home. My husband is recovering from lymphoma and this has helped him so much during this treatment and he is of course still using it daily. My daughter and I take some as well when we feel a bit under the weather and we manage to avoid colds etc .,,we have never seen such quick and great results ! It is a must for every household ."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"detox"
		],
		"author": "Linda S.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Linda S. 2019-03-15"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I and my clients love the new Shiaqga Concentrate. A very powerful natural medicine that people get results with. I am finding that it is having wonderful results on chelation therapy as well. Something I would not expect. I have gotten a few people that are still opting into the chemotherapy to take it as well. Those clients are not experiencing the major side effects that chemo causes. GREAT JOB!!!!!!!"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Donna G.",
		"selectedConditions": [
			"sinuses"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Donna G. 2019-12-20"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My daughter took some of this and made a tea out of it. My daughter has chronic sinus issues and using the Shiaqga in her nettie pot has made a tremendous difference.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Liza P. 2020-06-05",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I recommended the Shiagqa to a customer of mine in the USA as her horse had a very bad infection in its eye and the vet wanted to remove his eye. So, I contacted her and said to get the horse on the mushroom as it would kill the infection."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "She put it on topically near to the eye. I received a message from her to say that the horse (Monty) has not lost his eye, is off eye medication, and the eye is improving everyday.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Another story is my mum's dog has just got a growth on her back so she put her on the pet immunity and also topically with the oil. In 3 days its shrinking and the color has changed from angry red to white and she has stopped chewing it .. so very happy Pip dog."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Liza P.",
		"isArticle": false,
		"selectedConditions": [
			"infections"
		]
	},
	{
		"selectedConditions": [
			"viruses"
		],
		"delta": {
			"ops": [
				{
					"insert": "Diane R. 2019-04-04",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This stuff is AMAZING! I feel the difference and when my household got sick...I DIDN'T! YAY!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Diane R."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "​Larron Campbell, from California"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"At school or work, when someone coughs, germs get spread to everyone in the room.  My wife was normally the first to catch a cold and bring it home.  But now that she is using Shiaqga, we have had no colds or coughing in our family.  Even after going into the emergency room of our hospital where there were many people coughing, I did not catch even a sniffle.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "​Larron Campbell",
		"selectedConditions": [
			"viruses"
		],
		"isArticle": false
	},
	{
		"isArticle": true,
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Janice S. 2020-01-11",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I'm on my 4th bottle and about to order more...basically, I can't live without this. I just lost 2 brothers in 2 1/2 months to really nasty, aggressive cancers (different cancers too) and this will be the reason I won't get it. It does so much more. It's amazing stuff!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Janice S."
	},
	{
		"selectedConditions": [
			"cancer"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Brian P. 2019-12-23"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "It's been working great!!! I feel a lot better, I'm fighting prostate cancer. Thank you so so much for this product!! GOD Bless"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Brian P.",
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Dave D. 2019-10-21"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My stomach issues have now been resolved. Still taking it for some other health concern. Feeling a lot better!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"stomach"
		],
		"isArticle": false,
		"author": "Dave D."
	},
	{
		"selectedConditions": [
			"generic"
		],
		"author": "Thomas R.",
		"delta": {
			"ops": [
				{
					"insert": "Thomas R. from Monroe, UT",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I wanted to let you know that the Shiaqga formula has been a game changer for me personally.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​"
				},
				{
					"insert": "Lorenza M. 2019-10-16",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Great customer service and a excellent product. Every day I’m feelings better than the last."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": true,
		"author": "​Lorenza M.",
		"selectedConditions": [
			"generic"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Carl S. 2019-02-12",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you for the new Super Concentrate!!! I have been using a couple bottles of the original formula each month and now have upgraded to the concentrate. I first started using the Shiaqga for bladder cancer. My pain was severe and there was a bit of blood in my urine. Within the first month, my pain and bleeding stopped. My cancer is now in remission and my doctor is wondering what is going on. Thank you for this wonderful product."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"pain"
		],
		"isArticle": false,
		"author": "Carl S."
	},
	{
		"selectedConditions": [
			"blood"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Paul Dean from Stockton, MO",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​I love the Shiaqga product.  Having spent many years with alternative health care, the Shiaqga product is the best “healer” I have ever encountered.  I just wanted to express my gratitude for your product and share some of my experiences with you. "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am already in excellent health and I only started to take your product because I always want to maintain my healthy life.  I started taking the Shiaqga during the winter to build up my immune system.  Immediately, I notice that I was having more energy.  That was very good because I’m always on the go and sometimes my energy level runs low.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Next, I noticed that I was not getting the flu.  Since I come into contact with a lot of sick people, I usually will pick up a sickness every few months or so. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Let me share with you an example: A friend and I went over to visit another sick friend.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This sick friend had been out of work for a week due to a very bad virus. Well a few hours after we left, I started feeling flu like symptoms.  I decided to take and extra dosage of Shiaqga, and went to bed.  The next morning I woke up feeling 100% better.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "This was great considering the friend that went with me also started to feel the flu like symptoms that night.  Since he is not into alternative healing, he went and visited his doctor for assistance, and ended up missing two weeks of work, due to his feeling so bad.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I absolutely believe that we both contacted the same virus.  I processed the virus, while I slept, using the Shiaqga, while my friend took two weeks to get over the same bug."
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Wow, what a difference."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "After going through the winter season, and being on the Shiaqga product for four months, I experienced another wonderful benefit.  My seasonal allergies were gone!"
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Every year, for as long as I can remember, when Spring rolled around, so did my feeling bad.  My nose would constantly run, my eyes would be itchy and red, and generally I would feel quite miserable.  Since taking the Shiaqga, I have experienced a healing miracle.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I also have to share with you another experience.  I was testing a new alternative health care product for a company.  Before I went on their product I had my blood work done and everything was looking great.  After I was on their product for thirty days, I had my blood tested again.  To my horror, my blood was saturated with microscopic pieces of aluminum.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Immediately, I had my wife test her blood, to see if she was contaminated too."
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Since her blood was clear of aluminum, I concluded it was the new product I was testing. "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I had the product analyzed and found it contained a large quantity of aluminum."
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I contacted the company to tell them of my findings, and to find out what was going on. After they reviewed their manufacturing process, they concluded that the problem was within their mixing process.  They had been mixing the product in an aluminum container, and during that process microscopic pieces of aluminum were being ground off and contaminating the product."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "To fix my heavy metal problem, I started to double dose the Shiaqga.  When I had my blood work done about forty days later, I was completely clear of all contamination, and was back to my healthy self."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Once again, thank you for your integrity, and for this miracle in a bottle."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Paul Dean"
	},
	{
		"author": "Antonio V.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Antonio V. 2020-02-14"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I've noticed more energy! I also noticed my working heart rate has gone down, you see I'm a runner! I run a mile and half in the morning then at night before I go to sleep! My working heart rate should be 158 ! I have finished my runs and my working heart rate has been at 140 maximum! When in the past I would finish my run my maximum working heart would 164 or 168, thats very dangerous!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"energy"
		]
	},
	{
		"author": "Tammy M.",
		"selectedConditions": [
			"viruses"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Tammy M. from Fulton, NY:"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I came down with a cold at the end of December, and my body was really aching.  I received my Shiaqga, took my first dose, and four hours later, my aching was completely gone!  How awesome is that?!!  Overall, I am feeling so much better; I have more energy, strength, more flexibility, etc.  My son is noticing an improvement in his health as well.  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "V. Elledge",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "V. Elledge in Idaho",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "“Thank you so much for all the time you have spent talking with me.  I don’t know if it is the grounding, the Shiaqga, or a combination but my daughter is smiling again for the first time in ages . . . Again thanks so much for your caring.”"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Kristy M. 2020-03-13"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Let me just start by saying that, LOVE THIS PRODUCT. And the very thorough response that I received from the medicine man, makes it even better.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I was diagnosed with breast cancer in October of 2019 and out of fear and before I found this product, I completed three rounds of chemo. I took this along with turkey tail mushrooms and let me tell you, I did not once have to take the hormone shot to boost my immune system. I only took that shot after my last chemo (the 3rd one). This stuff works! When I went in to have my surgery, my tumors were 3mm and 6 mm down from 1.7 cm and 1.4 cm after only 3 rounds of chemo, so I know it works.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I will keep taking it, for maintenance."
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thanks, Medicine Man!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Kristy M.",
		"selectedConditions": [
			"cancer"
		],
		"isArticle": false
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Mark C.  2020-02-19"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I had sinus issues for 10 years. I went on your Super Concentrate (now on the original) and my sinus problems went away. Super amazing.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"sinuses"
		],
		"author": "Mark C."
	},
	{
		"selectedConditions": [
			"respiratory"
		],
		"isArticle": false,
		"author": "Jan W.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Jan W. 2020-02-28"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been suffering from a lung condition for quite some time. The Shiaqga cleared it all up where the doctors could not!!!! Thank you."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Carl S. 2019-02-12"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you for the new Super Concentrate!!! I have been using a couple bottles of the original formula each month and now have upgraded to the concentrate. I first started using the Shiaqga for bladder cancer. My pain was severe and there was a bit of blood in my urine. Within the first month, my pain and bleeding stopped. My cancer is now in remission and my doctor is wondering what is going on. Thank you for this wonderful product."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"cancer"
		],
		"author": "Carl S."
	},
	{
		"author": "Dave D.",
		"isArticle": false,
		"selectedConditions": [
			"stomach"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Dave D. 2019-10-21"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My stomach issues have now been resolved. Still taking it for some other health concern. Feeling a lot better!"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"author": "Celeste D.",
		"delta": {
			"ops": [
				{
					"insert": "Celeste D. 2020-03-02",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My friends cancer is now all gone thanks to Shiaqga!!!!!!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"cancer"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Sue M. 2020-01-15",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My doctor said I needed a double mastectomy and then the chemo treatments. Still there was a low probability of my returning to health. I chose to change doctors, do the Shiaqga, and change my diet to vegan raw food. I just got the clean bill of health.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Sue M.",
		"isArticle": false,
		"selectedConditions": [
			"cancer"
		]
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Sharen B. 2019-11-06",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you for assisting my on my path to healing. Wonderful product to keep me healthy."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Sharen B."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Teresa M. 2019-11-07",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I took the whole four month money back guarantee serious and gave it a try. I am in good health but wanted to keep it that way. Being already in good health, I really I did not clue in that things were getting better for the first two months. It was only after I was into my third bottle that I notice two major things were definitely different and great things were going on. The first was the flu that went through work that everyone got. I did not get it at all and not feeling sick for a few days is well worth the money spent. :) The next thing was my time of the month -- it surprised me since I did not get the soreness a couple days before and it was the gentlest period I have ever had. (Very strange to me to get from a stem cell product.)"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"menstration"
		],
		"author": "Teresa M.",
		"isArticle": false
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Kristeen D. 2019-02-04",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been on the Shiaqga for a few years now. I find it improves my overall health dramatically. Literally, I stay healthy while my coworkers are sick. My mother also takes it and she is no longer on her high blood pressure and other medications. She said she has not felt this good in decades."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Kristeen D.",
		"selectedConditions": [
			"viruses"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Jan A. 2019-06-13"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "MY LUMPS ARE GETTING SMALLER AND THE SORENESS IS ALMOST NON-EXISTENT!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"pain"
		],
		"author": "Jan A."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Melissa P. from Fredericksburg, VA",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"In October of 2018 my mother was diagnosed with 4 Stage Lung cancer and was given 6 to 8 months to live.  I was told about Shiaqga by a friend.  I started my mom on the product and each month she was getting better.  Two weeks ago, my mom was told that she is cancer free.  I'm grateful for Shiaqga and I'm telling everyone about the product.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"cancer"
		],
		"author": "Melissa P."
	},
	{
		"isArticle": false,
		"author": "​Mary K.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​"
				},
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Mary K. 2019-09-17"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "The tumor is shrinking!!!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"tumors"
		]
	},
	{
		"isArticle": false,
		"author": "Sadie S.",
		"delta": {
			"ops": [
				{
					"insert": "Sadie S. 2020-03-04",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "It is clearing up my health issues I have been dealing with for a decade."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		]
	},
	{
		"selectedConditions": [
			"tumors"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "John B. 2019-12-04"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My tumor is shrinking. I know its the Shiaqga! Thank you"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "John B."
	},
	{
		"author": "Zoe",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Zoe 2020-02-03"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I just wanted to let you know how much your Shiaqga is healing me! I didn't take it for maybe a week and a half and got sick so I'm back on it every day now. I've struggled with shingles for 3 years and it is the only thing that is able to stop it. Thank You.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"shingles"
		],
		"isArticle": false
	},
	{
		"isArticle": false,
		"author": "Jole C.",
		"delta": {
			"ops": [
				{
					"insert": "Jole C. 2020-03-06",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Been seeing some good improvement with my wife's MS."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"multiple sclerosis"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Colleen from New Ulm, Minnesota"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"We have been using Shiaqga for our Son Danny.  He is now free of his hodgkins lymphoma.  Thank you for donating the bottles of Shiaqga."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"hodgkins lymphoma"
		],
		"isArticle": false,
		"author": "Colleen"
	},
	{
		"isArticle": true,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Lisa M. 2019-11-13"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was told about the product from a friend of mine who has MS. I also suffer from this condition and have notice the shiaqga has been a great support."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Lisa M."
	},
	{
		"isArticle": false,
		"author": "Linda D.",
		"selectedConditions": [
			"blood pressure"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Linda D. 2019-06-19"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been using this for my high blood pressure and diabetes. I can notice a difference and will be keep using it."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Jean D. 2020-03-02",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This really has assisted my husbands allergies. Well worth it and looking forward to seeing the reverse aging manifest. Thank you so much for the wonderful customer service.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Jean D.",
		"selectedConditions": [
			"seasonal allergies"
		]
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Paul W. 2019-10-09",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Very pleased with it affect on my blood sugar"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"diabetes"
		],
		"author": "Paul W."
	},
	{
		"isArticle": true,
		"delta": {
			"ops": [
				{
					"insert": "Mike M. 2020-01-20",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was having an embarrassing health issue and the doctors could not help me very much. I was on your product for three days when everything got better. Amazing -- I am still taking it to see what other benefits I can receive over the next few months."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Mike M."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Noble M. 2019-07-16"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thanks for My Health, Back!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"isArticle": true,
		"author": "Noble M."
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "​Decker C. 2019-11-22",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Shiaqgu super concentrate is amazing. I took it to ward off a cold and it worked immediately. Thank you so much. I take it every day and think everyone should.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "​Decker C.",
		"isArticle": true
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Mary P. 2020-02-12",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Great product! I also had a tooth ache form months and I put a drop on location. It stopped the pain and quickly healed up the area."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"toothache"
		],
		"author": "Mary P.",
		"isArticle": false
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"energy"
		],
		"author": "Lindsey W.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Lindsey W. 2020-06-22"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This is an amazing product!  It's been about 2 months taking Shiaqga and I feel like my energy has improved along with my overall health, not to mention my sleep has improved 100%...... I recommend this product along with the essential oils to all family and friends.  Thank you again for such healthy products."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Tim C.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Tim C. 2019-03-30"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Shiaqga is the epitome of immune system bolstering and it is absolute necessity for an individual's systemic wholeness and metabolic homeostasis."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		]
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Karen D. 2020-02-11",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Okay so, its freezing here in Canada and I am supposed to be sneezing and coughing by now... but I'm not. I'm in complete shock, this stuff really does work! I even gave a tiny droplet to my oldest pet rabbit Cameron. He was getting so lethargic and slow. I am happy to report he has completely perked right up and back to his frisky self! Thank you Man Found Standing, I'm so happy for this blessing called Shiaqga!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Karen D.",
		"selectedConditions": [
			"viruses"
		]
	},
	{
		"author": "Jamie C.",
		"isArticle": false,
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Jamie C. 2020-02-19",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Your products have literally changed my life!!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Dr. Tim Chapman, M.D."
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Menifee, CA",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "re:  Dr. Rothfeld, MD. 's treatise on natural immune system stimulation in cases of Multiple Sclerosis: ",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"Dr. Rothfeld, MD. delivers sound and natural, scientific, evidenced-based information.  Our cultural times are recognizing an unheralded escalation of data accumulation, designating the marquee entitlement of “expert” all but a synonym of “disciple to learning.”"
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My comment is not to delve deeply into epigenomic modulatory activities concerning balancing salutogenic, life-style decisions, but to acknowledge a product that has significantly created immune system enhancing activities, both safely and repetitively.  It is called "
				},
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Shiaqga"
				},
				{
					"insert": " and can be located at ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"italic": true,
						"link": "http://shiaqga.com/",
						"color": "#1155cc"
					},
					"insert": "shiaqga.com"
				},
				{
					"insert": ".",
					"attributes": {
						"color": "#2a2a2a",
						"italic": true
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Its anti-neoplastic and immune-stimulating efficacies are superior.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "T. Chapman, MD.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"multiple sclerosis"
		],
		"author": "Dr. Tim Chapman, M.D."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Grace H. 2019-06-06",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thank you. I feel so much better. My high blood pressure is now in the normal range and without my pills. I am going to start my husband on it now too.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"blood pressure"
		],
		"author": "Grace H.",
		"isArticle": false
	},
	{
		"selectedConditions": [
			"seasonal allergies"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Benjamin C. 2019-05-02"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Just used my first bottle of the super concentrate. My allergies haven’t had the impact on my sinuses like they did. I’ve been able to stop taking all meds for my allergies. Just my Shiaqga now!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Benjamin C."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Steve F. 2020-01-09",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My wife and I have been using the Shiaqga as maintenance for about three years now. We are elderly and used to catch the viruses that were running around. Since taking the Shiaqga we have not been sick at all.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Steve F.",
		"selectedConditions": [
			"viruses"
		]
	},
	{
		"selectedConditions": [
			"lumps"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Raymond N. 2020-05-19"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "great shipping. products seams to be working well. lump under my arm after 1 month half the size. with this lock down unable to see doctors for evaluation so if cancer helping if not still seams to be working the more I know I will post, thanks",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Raymond N."
	},
	{
		"isArticle": true,
		"author": "Joann G.",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Joann G. 2019-11-18",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have seen much improvement in my families health. Thank you.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": true,
		"delta": {
			"ops": [
				{
					"insert": "Audrey L. 2019-11-26",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Phenomenal product. As a practitioner, I have several clients taking this product with excellent results. Highly recommend.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Audrey L."
	},
	{
		"isArticle": false,
		"author": "Amy D.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Amy D. 2019-07-30"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "No mastectomy for me!!!!!! I had an advanced stage of breast cancer and my doctor was pushing a mastectomy and well as their other treatment. I am so grateful my friend referred me to the Shiaqga. I am now cancer free!!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"cancer"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "David B. 2019-03-05"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I used it topically, a couple drops three to five times a day, on a skin cancer. I also took it internally. My skin cancer went away in two weeks . . . now nice new healthy skin. I am also feeling better and have more energy. I am going to keep using this product.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "David B.",
		"selectedConditions": [
			"cancer"
		],
		"isArticle": false
	},
	{
		"author": "Kim M.",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Kim M. 2019-03-15",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you for the Shiaqga it has changed my life. I had numerous health conditions that are now gone or way better than before. I have not felt this good in twenty years."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"author": "Elin M.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Elin M. 2019-09-27",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "A wonderful product that I am adding to my daily supplements. I was having some smaller health issues and a major eye (macular degeneration) issue. My health and eye sight is getting better. I thank God for this wonderful product!!!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"eyes"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Francesca V. from Euclid, OH",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "“Almost 3 years ago, my health took a nose dive regarding several issues . . . My skins was so bad it was now shooting blood onto the floor from the slightest touch.  About 1/3 of my skin was now psoriasis ridden, not just itching but causing pain and bleeding, many of my clothes and bedding ruined."
				},
				{
					"insert": "\n"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I could not lay down to sleep.  It felt like I was laying down on sharp objects . . . I sat in front of my computer crying that I knew I needed to do something and knowing that what the medical profession deemed an appropriate solution in medications was not an option for me.  I was lead to the site . . . I started using Shiaqga and within 24 hours my skin improved tremendously.  My skin had integrity again.  The shooting blood stopped. . . I am so grateful . . . Thank you.”",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"psoriasis"
		],
		"isArticle": false,
		"author": "Francesca V."
	},
	{
		"selectedConditions": [
			"non-hodgkins lymphoma"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "John B. 2019-10-11"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Its been just over three months and my non-hodgkins lymphoma is now in remission. I attribute this to the Shiaqga.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "John B."
	},
	{
		"selectedConditions": [
			"pain"
		],
		"delta": {
			"ops": [
				{
					"insert": "Brenda W. 2020-02-25",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Really helped my joint pain, and quite quickly too.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Brenda W."
	},
	{
		"selectedConditions": [
			"energy"
		],
		"isArticle": false,
		"author": "Judy V.",
		"delta": {
			"ops": [
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "Judy V. 2020-01-04",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Well I’ve taken this now for over a month. I believe I feel more energy, less pain.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Murielle M. 2020-05-19",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Out of Corona virus fears I found this magical product. I give it to my husband and my 3 kids, too. Although I can’t actually see it I feel that this wonderful mushroom is doing amazing things to my body by bringing it into a modulated state. I made my friend buy this in the beginning of the lockdown In NYC who works for the NYPD being outside every day, she is as healthy as she can can be. I also made another friend take it who started a job in a hospital. Thank you for sharing your wisdom and making this incredible product."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Murielle M.",
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Randy M. 2020-01-29"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am a health professional and am quite familiar with other mushroom products. I have made comparisons and found the Shiaqga superior. I feel great on the Shiaqga. Thank you.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": true,
		"selectedConditions": [
			"generic"
		],
		"author": "Randy M."
	},
	{
		"isArticle": false,
		"author": "Linda S.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Linda S. 2019-03-15"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I and my clients love the new Shiaqga Concentrate. A very powerful natural medicine that people get results with. I am finding that it is having wonderful results on chelation therapy as well. Something I would not expect. I have gotten a few people that are still opting into the chemotherapy to take it as well. Those clients are not experiencing the major side effects that chemo causes. GREAT JOB!!!!!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"chemotherapy side effects"
		]
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"cancer"
		],
		"author": "Debbie M.",
		"delta": {
			"ops": [
				{
					"insert": "Debbie M. from Sarasota, FL",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"We absolutely love this product and have taken for years.  I have taken for my cancer diagnosis 13 years and my husband 3 years ago.  Since I can't say it cured per FDA (but we both are cancer free), I will say it helps us keep it away in my personal opinion.  My husband took it for his eyesight Vein Occlusion where he was losing his site in one eye.  You have to get shots in your eye monthly for years in most cases - his doctor was amazed when his eyesight was back to normal in 6 months and no more shots needed - he said this has never happened in his practice.  We will keep taking it.  I would recommend people research this great product by clicking on the references section on their website.  Thank you so much for having the best brand I have been able to find.\""
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"thyroid"
		],
		"delta": {
			"ops": [
				{
					"insert": "James C. 2019-12-12",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "We are using this along with the Thyroid Support and notice a great difference. Already cutting back on the meds and still filling much better. Thank you."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "James C."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Tammy M. from Fulton, NY (07-21-2020):",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "​",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#1d2228"
					},
					"insert": "The Super Concentrate is amazing.  My friend purchased some . . . and her daily back pain stopped -- no need for Ibuprofen.  She also has head tremors from a car accident and broken neck.  Her tremors ceased by 70% just in 2 days.  It is truly a healer!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Tammy M.",
		"selectedConditions": [
			"tremors"
		],
		"isArticle": false
	},
	{
		"isArticle": false,
		"author": "Linda M.",
		"selectedConditions": [
			"tumors"
		],
		"delta": {
			"ops": [
				{
					"insert": "Linda M. 2019-07-16",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "CANCER FREE!!!!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Pauline C.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Pauline C. from Norman Park, GA"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"I wanted to tell you how much the Shiaqga has helped me.  About four years ago I had a medical problem and the treatment caused my kidneys, Per the kidney Dr. \"went to sleep\"  "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been taking shots to keep them stable, and was told they would never get better.  I started taking Shiaqga and within three months the blood work showed improvement. "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Three months after that the blood work showed another improvement.  I quit those awful shots and three months later, my blood work shows another improvement. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I credit it all to the Shiaqga.  Thanks for such a Great Product, I take it every day and truly believe it's what keeps me going.”"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"kidney"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Cheryl M. 2019-05-29"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thank you for this product. It really has assisted my families health.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Cheryl M.",
		"selectedConditions": [
			"generic"
		]
	},
	{
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"author": "Kristi A.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Kristi A. 2020-05-20"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Awesome product"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am grateful to have available for my clients whom have an array of different issues plus for added protection during our current events"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Michael V.",
		"isArticle": false,
		"selectedConditions": [
			"libido"
		],
		"delta": {
			"ops": [
				{
					"insert": "Michael V. 2020-02-24",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This has assisted/cured my prostate cancer and I have found it also increased my libido, energy, and overall health.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Dianna C.",
		"isArticle": false,
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Dianna C. 2019-04-01"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Great job. I can really tell the strength increase with the Super Concentrate. The Shiaqga has been so beneficial to overcoming my numerous health conditions. Thank you for this."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Barbara B.",
		"delta": {
			"ops": [
				{
					"insert": "Barbara B. 2019-05-29",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Feeling better and continuing to heal.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"isArticle": false
	},
	{
		"selectedConditions": [
			"generic"
		],
		"author": "Ann P.",
		"isArticle": true,
		"delta": {
			"ops": [
				{
					"insert": "Ann P. 2019-09-26",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Amazing, I feel like a new person after only using for 30 days. This is a staple now in my health maintenace",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"blood pressure"
		],
		"delta": {
			"ops": [
				{
					"insert": "Dawn D. 2019-06-20",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "We received Shiaqga five weeks ago and my blood count - both white and red came back completely normal -- they were out of range due to a cancer diagnosis. We could not believe that it also brought down my blood pressure to the lowest it has been in years. By accident I dropped the bottle on a brick floor and in wiping it up, it cleaned my floor and made my house smell wonderful! I called and reordered after the Shiaqga was all over the floor and they shipped it out the same day. They have very good customer service! I recommend this product for anyone with immune issues or fighting cancer."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Dawn D."
	},
	{
		"author": "Rusty C.",
		"selectedConditions": [
			"pain"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Rusty C. from Maramec, OK:",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I've been using shiaqga for about 4 months now.  It has given me more energy and relieved back pain and joint pain.  I had bladder cancer into the muscle and was recommended shiaqga and lemon oil.  I went in for testing and February and was given the all-clear sign for cancer.  I give a bottle of shiaqga to my dad who has Parkinson's.  He had Tremors very bad and had to shuffle his feet to walk.  He has been taking it for approximately 1 month and told me and it has helped slow with the trimmers down and he can walk much easier he plans on continue taking it.  Thank you very much.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"tumors"
		],
		"author": "Judith N.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Judith N. 2019-04-04"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I purchased this for a friend who had breast cancer. Her tumor shrunk in almost half within thirty days. WOW!!!"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Barbara S. 2019-10-10"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Wonderful product. It has really helped knocking out a very persistent UTI. I also notice my menopause symptoms have significantly dropped. Also my daughter has extremely painful periods and she was shocked to have her first \"pain free\" period.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"menstration"
		],
		"author": "Barbara S."
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "LEE F. 2019-11-23"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Shiaqga has ingredients with a purpose! The products begin to Cleanse and Feed the body and mind almost immediately, with a true emphasis on health, wellness,"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "longevity and a deep respect for performance!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "You have set the bar high from the ground up!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "LEE F.",
		"isArticle": true
	},
	{
		"selectedConditions": [
			"viruses"
		],
		"isArticle": false,
		"author": "Pamela A.",
		"delta": {
			"ops": [
				{
					"insert": "Pamela A. 2019-12-31",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I know I was told to give it a couple months, but I can already tell its already working. I have more energy, sleeping better, and staying healthy where normally I would pick up the bug that went around."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Signe J. 2019-03-31"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have felt a complete change in my health sionce taking Shiaqga. It is very strong and I have to dilute it in water in order to get it down. Seems to be working like it should. I am very grateful for my renewed health.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"generic"
		],
		"author": "Signe J."
	},
	{
		"author": "Jacqueline J.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Jacqueline J. 2019-03-13"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "It has helped me health wise immensely, both internally and when used direct on my skin. Advice and support was excellent and much appreciated. Thank you.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"skin/hair"
		],
		"isArticle": false
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Frank G. 2019-09-17",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you. I have been using this for stomach issues and my health has greatly improved."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"stomach"
		],
		"author": "Frank G."
	},
	{
		"author": "​Mary B.",
		"isArticle": false,
		"selectedConditions": [
			"cancer"
		],
		"delta": {
			"ops": [
				{
					"insert": "​Mary B. 2019-06-26",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "It cleared up a skin cancer in about two weeks. I just placed a drop on the area a few times a day and now its all gone/better. I have also been taking it internally and found it has cleared up a few other health conditions. I am sticking on it.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Dawn H. 2020-03-03",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Shiaqga is easy to take and has kept the entire family cold and flu free for the entire season.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"author": "Dawn H."
	},
	{
		"selectedConditions": [
			"scars"
		],
		"author": "Judith",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Judith from Calgary, Alberta, Canada wrote: "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I bought two of your Shiaqga tinctures about a month ago.  I have to say I'm impressed.  I have an underfunctioning (and quite swollen) thyroid.  I've received your tincture about two weeks ago and I have been using it (when I remember to take it) pretty much three times a day.  The swelling at my throat has reduced by a third.  That's impressive.  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "As well, I've had some scars that are substantially reduced in size, colour and such.  "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My husband caught pneumonia over the holidays and has been taking it religiously.  He says he's now functioning at \"...ninety percent...\" which is astonishing because the last time he had pneumonia (about ten years ago) it took a good six to eight weeks to get him anywhere near that level of energy.  He's 69 years old, for heaven's sake!  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I'll be purchasing more.  No question."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"selectedConditions": [
			"generic"
		],
		"author": "Corey S.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Corey S. 2020-02-21"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Hands down the best supplement that I've ever taken. I was going through some pretty serious health issues and I started taking shiaqga and within days my symptoms were gone. I have been taking shiaqga ever since and if possible I will take it the rest of my life.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Rusty C. from Maramec, OK:"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I've been using shiaqga for about 4 months now.  It has given me more energy and relieved back pain and joint pain.  I had bladder cancer into the muscle and was recommended shiaqga and lemon oil.  I went in for testing and February and was given the all-clear sign for cancer.  I give a bottle of shiaqga to my dad who has Parkinson's.  He had Tremors very bad and had to shuffle his feet to walk.  He has been taking it for approximately 1 month and told me and it has helped slow with the trimmers down and he can walk much easier he plans on continue taking it.  Thank you very much. "
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Rusty C.",
		"selectedConditions": [
			"cancer"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Tammy M. 2019-12-31",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Love the taste.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Tammy M.",
		"isArticle": false,
		"selectedConditions": [
			"generic"
		]
	},
	{
		"isArticle": false,
		"author": "Lindsey W.",
		"selectedConditions": [
			"sleep"
		],
		"delta": {
			"ops": [
				{
					"insert": "Lindsey W. 2020-06-22",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This is an amazing product!  It's been about 2 months taking Shiaqga and I feel like my energy improved along with my overall health, not to mention my sleep has improved 100%...… I recommend this product along with the essential oils to all family and friends.  Thank you again for such healthy products.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Kelly Ann C.",
		"delta": {
			"ops": [
				{
					"insert": "Kelly Ann C. from Southern Indiana",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am very emotional writing this, but will attempt to be as brief and to the points as possible.  My mind realized consciously only a few days ago & I feel more than a bit 'guilty' for never taking the time to do so before.  Myself, my family, and many of my dearest close friends have used Shiaqga ever since it first became available to people beyond only the Native American Tribes."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "If it were not for having the privilege of personally knowing Man Found Standing, for about 20 years, through our mutual work in the realms of advanced natural alternative medicines, this knowledge would not ever have been available to us.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I remember the years of 'waiting', with eager but admittedly terrible impatience, as the study and experimentation continued to formulate a product perfectly balanced, quickly effective, and yet 'simple & affordable' for all to be easy to receive the powerful benefits - about 3 years 'on the edge of my seat' actually.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Since that day not one has passed that I would ever want to be without this product in my own medicine cabinet for extreme emergencies, as well as on my counter as a regular consistent supplement to keep my immune system operating as it was designed to in the first place.  (My own close ones who are experienced with it themselves feel the same way.)",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "For all of my whole life's work, it is beyond question the #1 single product I can point to, for anyone, with any health challenge - whether minor or severely advanced to 'being on the brink & suffering profoundly' - that is the closest thing to a true 'magic bullet' that I have encountered in over 35 years of research & experience.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "The stories I could tell are countless - it would require pages & pages, a whole book maybe.  (Now there's a thought!)",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "People who had been 'written off as no hope whatsoever' to live.  Others who were diagnosed as being 'crippled physically' for the rest of their lives.  Some who were told 'no recourse but dangerous surgeries with very high risk of complications beyond rates of anticipated success'.  Many others with chronic cases of common debilitating degenerative diseases.  The list goes on beyond count............... ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "However, even though I have many years of experiencing the benefits of Shiaqga in it's former 'dry capsule form' over many years, I was in no way prepared for the power of Man Found Standing's new liquid extract form of this product.  My family & close ones are equally astounded - the potency is 'off the charts' beyond anything we could have imagined possible.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "In only 5 days my 74 year old father is feeling better than he has in many, many years - so much so that he finally told me (last night) just how bad he actually has been feeling, honestly, for a very a long time.  (He always tries to be so brave so we won't worry - but we all knew anyway.)"
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "He is so excited that, even though he doesn't have a computer, he has had me read every word on this site to him, over the phone, during the past 3 days.  (Both Dad & I have started giving it to our 'oldest and/or health challenged pets in need' too - my own little Tantani has stopped starving herself & been keeping a full belly for the past week - nothing else I've done has worked previously, she is 16 and had a degenerative genetic issue which vets were unable to help, though they tried.  To me it has not ever been a matter of 'prolonging life', especially when suffering, - what I devoutly feel matters, fundamentally to us all, is that of QUALITY of Life right now, this moment, today - and if life allows recovery, that I leave to God's own eternal wisdom for each soul.)",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "In only 1 week's time, since these first bottles of liquid Shiaqga have arrived and I parceled them out at Christmas as 'gifts' this year (today is Dec. 31st 2016 as I write this) - my phone has been ringing with loved ones expressing their gratitude and utterly shocked enthusiasm."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Some are friends from around the country who only received their bottles in the mail a few days ago.  Some of them it was a staggering surprise because they did not even have experience with the original capsule version prior.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "But I was well aware, acutely, of their own 'serious need' - and understood enough from prior experience that there was 'nothing I knew of or had to give that might be more valuable to them, in truth, than asking Man Found Standing to send them a bottle of this 'brand new liquid extract version' of his Shiaqga formula.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "All I can say, in these early stages here so soon, is that in all my 50+ years of life so far in this body, I have never personally 'felt SO good SO fast' (I demand a LOT from my body constantly - am so 'American' in every way the truth is staggering I am even alive, much less actually 'well & healthy' according to medical doctors - if they only knew all I have done, do, and also don't do that I know I should! I am not being flippant, it is simply the truth.....)    But much more importantly - I have NEVER received such overwhelming 'gratitude' from others for any 'gift' of any sort I have ever given in my whole life as has happened over these past few days.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I don't even know 'how to take that' - but I sure am having a wonderful time 'taking it myself' and, after hearing so much from my own loved ones, I felt it high time I begin 'giving the knowledge of it' in whatever way I may be able to for others.  Time for me to put something in writing and put my own name on it for anyone who cares to know."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "So thank you, with all my eternal heart & soul, my beloved friend, Man Found Standing, for all you have given to me with your own time, infinite patient care, and brilliant insight & expertise over the past 2 decades."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "In my book, you are not only a 'Medicine Man' - but you are a Miracle Medicine Man with the most powerful heart of wings, empowering & strengthening others, to have and be the same. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I love you for all your unending selfless help to me - as well as those near & dear who you've come to know as well over the years - in making the lives of us & all our other beloveds so much better, in ways words can not ever come close to expressing fully."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"isArticle": false
	},
	{
		"selectedConditions": [
			"chemotherapy side effects"
		],
		"delta": {
			"ops": [
				{
					"insert": "David C. from Pleasant Grove, UT",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"A friend of mine discovered his prostate cancer returned.  He decided to undergo the doctor's recommended treatment of chemotherapy.  I told him about the Shiaqga product and give him two bottles.  Several weeks into his treatment he reported back to me that besides him being a little sick for a half-hour after treatment he would not even know he was doing the chemo.  During his first experience, he was sick all the time and his hair fell out.  He said if his experience before was a ten this would be a one.  He even told me his doctor said, \"Wow, you're really responding well to the treatment.'  He knows it has everything to do with the Shiaqga.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "​David C.",
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Nathaniel C. 2019-03-08",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Awesome stuff very liver purifying and upgrading. Improves liver efficiency which translates to more energy and better workouts. Fortifies immune system, no viruses or any infections this year. Physically, mentally, emotionally upgrading."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Nathaniel C.",
		"isArticle": false,
		"selectedConditions": [
			"generic"
		]
	},
	{
		"isArticle": false,
		"author": "Diane C.",
		"selectedConditions": [
			"pain"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Diane C. 2019-10-31"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "SO far so good, still on my first bottle, but I already feel some of my pain in some injuries I have going away.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "the people are very friendly and very helpful. any questions they always answer.  I also pick two more bottles so I can give it a good 3 month try. thank you"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "​Pamela A.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "​Pamela A. 2019-12-31"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I know I was told to give it a couple months, but I can already tell its already working. I have more energy, sleeping better, and staying healthy where normally I would pick up the bug that went around."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"energy"
		]
	},
	{
		"author": "Judy H.",
		"selectedConditions": [
			"cancer"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Judy H. 2019-12-20"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am a type 2 Diabetic and a year ago I was also diagnosed with bladder cancer. I had surgery to remove part of the tumor. The Uroligist said he could not remove it all without damaging the bladder and my only choice would be to completely remove my bladder and uterus. Then I would have to have a stoma and bag the rest of my life, which would be shortened. And before the radical surgery I would have to have chemo. My A1C was over 9.  I decided not to have the chemo or surgery but to try the Shiaqga with prayer instead. I just had a follow up ultrasound and my Dr and I are thrilled that there has been no further growth of the tumor. Also my A1C is 7.6. I also have a friend who is also diabetic and his A1C was over 13. I gave him a bottle of Shiaqga to try. His A1C went down to 7.6 also. We are both very happy and feel much better as well. Thank you"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Paul Dean from Stockton, MO",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "​I love the Shiaqga product.  Having spent many years with alternative health care, the Shiaqga product is the best “healer” I have ever encountered.  I just wanted to express my gratitude for your product and share some of my experiences with you. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am already in excellent health and I only started to take your product because I always want to maintain my healthy life.  I started taking the Shiaqga during the winter to build up my immune system.  Immediately, I notice that I was having more energy.  That was very good because I’m always on the go and sometimes my energy level runs low.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Next, I noticed that I was not getting the flu.  Since I come into contact with a lot of sick people, I usually will pick up a sickness every few months or so. "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Let me share with you an example: A friend and I went over to visit another sick friend."
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This sick friend had been out of work for a week due to a very bad virus. Well a few hours after we left, I started feeling flu like symptoms.  I decided to take and extra dosage of Shiaqga, and went to bed.  The next morning I woke up feeling 100% better."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "This was great considering the friend that went with me also started to feel the flu like symptoms that night.  Since he is not into alternative healing, he went and visited his doctor for assistance, and ended up missing two weeks of work, due to his feeling so bad.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I absolutely believe that we both contacted the same virus.  I processed the virus, while I slept, using the Shiaqga, while my friend took two weeks to get over the same bug."
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Wow, what a difference."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "After going through the winter season, and being on the Shiaqga product for four months, I experienced another wonderful benefit.  My seasonal allergies were gone!"
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Every year, for as long as I can remember, when Spring rolled around, so did my feeling bad.  My nose would constantly run, my eyes would be itchy and red, and generally I would feel quite miserable.  Since taking the Shiaqga, I have experienced a healing miracle.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I also have to share with you another experience.  I was testing a new alternative health care product for a company.  Before I went on their product I had my blood work done and everything was looking great.  After I was on their product for thirty days, I had my blood tested again.  To my horror, my blood was saturated with microscopic pieces of aluminum.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Immediately, I had my wife test her blood, to see if she was contaminated too.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Since her blood was clear of aluminum, I concluded it was the new product I was testing. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I had the product analyzed and found it contained a large quantity of aluminum.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I contacted the company to tell them of my findings, and to find out what was going on. After they reviewed their manufacturing process, they concluded that the problem was within their mixing process.  They had been mixing the product in an aluminum container, and during that process microscopic pieces of aluminum were being ground off and contaminating the product.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "To fix my heavy metal problem, I started to double dose the Shiaqga.  When I had my blood work done about forty days later, I was completely clear of all contamination, and was back to my healthy self."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Once again, thank you for your integrity, and for this miracle in a bottle.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Paul Dean",
		"selectedConditions": [
			"energy"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "T. Whitaker from Kaysville, UT"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"I took only a daily dose and it relieved an earache that I had for three months.  I had a virus and it left me with an earache that was very miserable and painful.  It felt like an inner ear infection or block. . . I could hear again! "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was so thrilled I could not believe it.  I have also had a ringing in the ear for years and the ringing in the ear has just quit it went away.  I know this has all been sinus related and I am so grateful to you for such a wonderful product."
				},
				{
					"insert": "\n"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I also have experienced more energy.  I now have my energy back and I am not a couch potato at night. "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I have a ruptured disk in my back and I am starting to do things that I have not been able to do for years. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I have only used ½ a bottle so far and it has been just great.  Thank you so much for this great product.  I can’t ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "Thank You",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": " enough for this great product",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a",
						"italic": true
					},
					"insert": "."
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thanks again\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "T. Whitaker",
		"selectedConditions": [
			"back"
		],
		"isArticle": false
	},
	{
		"author": "Bronte G.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Bronte G. 2019-06-13"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I don't get my sicknesses like I did before -- colds, flu, and bronchitis. I am feeling very much healthier and am staying on this supplement."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"viruses"
		]
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Janet M. 2019-12-31"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I like the taste of it, the cinnamon & peppermint come thru on the taste for me. I have passed things from my body since I started taking this roughly 6 wks. ago and I know it is working. I will continue to take this for several months to continue to de-toxify and cleanse my body and for healing. Thank you so much for formulating this product and having it available for people to get and stay healthy."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Janet M.",
		"selectedConditions": [
			"generic"
		]
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"chemotherapy side effects"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Rose K. 2019-11-06"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My chemo side effects immediately significantly diminished. The doctor is excited about my test numbers. I am feeling much better. I think I will go try the Super Concentrate next. Thank you so much!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Rose K."
	},
	{
		"isArticle": true,
		"author": "Michael V.",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Michael V. 2019-07-16"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am keeping on it and things are looking good.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Ken C. from Liverpool, England ",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"First off, I am astounded at how quickly it has worked!!!  My problem, (one of them) is that the cancer had attacked the esophagus and \"switched off\" the nerve endings which left me unable to eat or drink.  I was told by the doctor that I would ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "NEVER"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " be able to do so, and would have to be fed via a tube in my stomach.  "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Great future to look forward to huh.  I felt that I would be better off dead!!!  Luckily for me, my son found your website and we decided to give it a try, as I had literally nothing to lose.  Thank God I did!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I have been taking twice the recommended dosage to try and get it started.  Now after about 14 days, I can eat and drink almost completely normally.  Thank you ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "SO MUCH",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": ".  I will be continuing with them, possibly on a lower dose (eventually) for the time being.  I am so grateful.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "The next week Ken wrote:",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "“This is my latest medical update.  Prepare to be impressed/astounded!  Yesterday I went to see my consultant for a follow-up visit following the work on my vocal chords.  When I went into his consulting room I saw the amazement on his face.  I think that he was not expecting any improvement in me.  He was totally bewildered to find that I have made such a recovery!  He ran a few tests which confirmed that I can now eat and drink normally. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "He said that the nerve endings were completely better, but could not explain how this had occurred!  He said that it was like a miracle.  His final phrase was that the recovery was "
				},
				{
					"insert": "NOT",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": " due to anything the hospital had done. . . I left feeling secure in the knowledge that it was the Shiaqga which had done the trick.  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "​I am your staunchest supporter, and tell anyone I can about it.”",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"cancer"
		],
		"author": "Ken C."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "​William C. 2019-01-02"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "During the first two months I noticed some small improvements with better energy and not catching the flu that went around. It really was into my third month that I started noticing the larger changes with my health. My arthritic bumps went down, I could now easily get out of my chair, and my mobility has improved. My blood pressure is now in the normal range as well. Thank you.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"energy"
		],
		"author": "​William C."
	},
	{
		"isArticle": true,
		"author": "RuLea T.",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "RuLea T. 2019-11-04"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am so grateful for that formula and for my health and strength and how Shiaqga continues to build my immunity. Thank you for such an empowering formula."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Teresa M.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Teresa M. 2019-06-28"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I ordered from my mother who has stage 4 cancer. We are getting great successes just in this short time. It has been an amazing turn around!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Joann G",
		"selectedConditions": [
			"back"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Joann G. from Gaylord, MI after ordering one bottle wrote:"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"We ordered this product at the very strong recommendation of a good friend.  My husband is the one who has been taking it, and I think I really do see some good improvement in his overall health.  He is 91 years old, suffers from a severe heart condition, vascular dementia and suffered a serious fall in early April that seems to have worsened his sciatica.  Instead of having days of intense pain to the point where he is pretty much bedfast 24/7 except to use the bathroom and come to the table to eat meals, there are days when he can sit up for long periods of time without too much problem.  This is the only new thing we've introduced into his \"pill regimen\" so I think we can truthfully say we see improvement.  Praying that it continues.\""
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Raymond J. 2020-03-03",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "The response to my concern regarding a specific ingredient was very gracious, helpful and responsive. I highly recommend this company, this product and this owner.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Raymond J."
	},
	{
		"author": "Tammy M.",
		"selectedConditions": [
			"energy"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Tammy M. from Fulton, NY:",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I came down with a cold at the end of December, and my body was really aching.  I received my Shiaqga, took my first dose, and four hours later, my aching was completely gone!  How awesome is that?!!  Overall, I am feeling so much better; I have more energy, strength, more flexibility, etc.  My son is noticing an improvement in his health as well. "
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "​Linda D.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "​Linda D. 2019-06-19"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have been using this for my high blood pressure and diabetes. I can notice a difference and will be keep using it.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"diabetes"
		]
	},
	{
		"author": "Stacy M.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": true,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Stacy M. 2019-10-21"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I noticed a great difference in my health."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Pamela A. 2019-12-31",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I know I was told to give it a couple months, but I can already tell its already working. I have more energy, sleeping better, and staying healthy where normally I would pick up the bug that went around."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Pamela A.",
		"selectedConditions": [
			"sleep"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Lisa C. 2019-12-20"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Been using this product shrinking my tumor. Thx u"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Lisa C.",
		"selectedConditions": [
			"tumors"
		]
	},
	{
		"selectedConditions": [
			"generic"
		],
		"author": "Sue M.",
		"delta": {
			"ops": [
				{
					"insert": "Sue M. 2020-01-15",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My doctor said I needed a double mastectomy and then the chemo treatments. Still there was a low probability of my returning to health. I chose to change doctors, do the Shiaqga, and change my diet to vegan raw food. I just got the clean bill of health.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Barbara S. 2019-10-10"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Wonderful product. It has really helped knocking out a very persistent UTI. I also notice my menopause symptoms have significantly dropped. Also my daughter has extremely painful periods and she was shocked to have her first \"pain free\" period.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"menopause"
		],
		"isArticle": false,
		"author": "Barbara S."
	},
	{
		"author": "Tim T.",
		"selectedConditions": [
			"viruses"
		],
		"delta": {
			"ops": [
				{
					"insert": "Tim T. 2020-01-21",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I used this to get over an illness that was lingering. I now use it daily to keep the sickness away. I am finding it is doing a very good job."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Ruth S. from Toole, Utah"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I love the Shiaqga.   have tried all kinds of cholesterol medication, can’t get my high cholesterol to come down.  I had a heart attack in 06 and my bad cholesterol was clear up to 400.   I now have it down to 252, and I‘ve have had like 96 points come down for the bad cholesterol and triglycerides 129 points.  Every part of the cholesterol problem is coming into balance and I just love the Shiaqga and I would recommend it to everyone. Thank you.”",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Ruth S.",
		"isArticle": false,
		"selectedConditions": [
			"cholesterol"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Rebekah L. 2020-02-21"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Since finding this product I haven’t been sick in a year where as last year I was sick for a month well for a month sick for a month etc. I don’t have a spleen so I have a lower white blood count and this has been beyond a game changer. I am beyond relieved and impressed I tell everyone about it! Another interesting fact here that I kind of just put two and two together is I believe this product increases libido at least for me so for women. I am 42 very healthy I take care of myself and I didn’t have a decrease libido but this has been very interesting. Thank you so much you guys for keeping this product available and for keeping it so potent and pure and for always doing your best to keep the price reasonable. I can’t thank you enough! Buy this product! You won’t regret it.💕"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Rebekah L.",
		"selectedConditions": [
			"libido"
		]
	},
	{
		"selectedConditions": [
			"sleep"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Barbara M. 2019-12-06",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I love this product. It is keeping me free from this serious illness that everyone has and is going around Atlanta, GA. I feel more energy and seem to be sleeping a lot better. I was not expecting the great taste. Normally supplements like this are so awful tasting",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Barbara M."
	},
	{
		"author": "William C.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "William C. 2019-01-02"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "During the first two months I noticed some small improvements with better energy and not catching the flu that went around. It really was into my third month that I started noticing the larger changes with my health. My arthritic bumps went down, I could now easily get out of my chair, and my mobility has improved. My blood pressure is now in the normal range as well. Thank you.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"blood pressure"
		]
	},
	{
		"selectedConditions": [
			"chemotherapy side effects"
		],
		"delta": {
			"ops": [
				{
					"insert": "Stephen M. 2019-06-13",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I heard about your product from a friend of a friend. I am currently on chemotherapy for liver cancer. I tried your Shiaqga and immediately I started feeling better. I have been taking it religiously and I would not know I was on the chemo except being sick for about 1/2 hour after treatment. Before shiaqga I was sick all the time. Well worth every penny!!!!!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Stephen M."
	},
	{
		"author": "Kristi A.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Kristi A. 2019-10-09",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am very Happy with the product",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have seen a difference in my 3 cats too"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Karla M.",
		"selectedConditions": [
			"viruses"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Karla M. 2020-02-04",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I refuse to get a flu shot...having peace of mind about flu season is worth staying on it. My husband and I both take it daily..year round!!! Whatever else it takes care of is just a bonus!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"author": "Mike A.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Mike A. 2019-07-15"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was diagnosed with prostate cancer once again. My previous cancer episode was a few years ago and I underwent the doctors treatment of chemo and it went into remission. A friend gave me a bottle of the Shiaqga as a gift to \"just try out\"."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I started on the Shiaqga right before undergoing the chemo treatment again. I am completely shocked. Before with the chemo I lost my hair and was sick, sick, sick. Now other than a little sickness within the first 1/2 hour after chemo I would not even know I was doing it.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "The doctor stated, \"Wow, your really responding well to the chemotherapy.\""
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I know it has nothing to do with their chemo treatment and everything to do with the Shiaqga I have been taking for the past couple months. THANK YOU!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"chemotherapy side effects"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Mariana Y. 2019-07-09",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Absolutely love this product, got rid of all my pain in leg, to which I don't need a cane or wheelchair! Have shared with many and they too have had great results! Highly recommend! Great customer service as well! Congrats!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"pain"
		],
		"author": "Mariana Y."
	},
	{
		"author": "Shirley C.",
		"delta": {
			"ops": [
				{
					"insert": "Shirley C. 2019-10-21",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I see this has been helping me. Thank you"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Leanna Bush from Branson, MO",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I first started taking the Shiaqga to try to help my arthritis.  I had been under a lot of stress and not eating healthy and my body had taken the toll.  My arthritis had reached the point that it was painful to get up out of a chair or even the car.  I could not walk upright.  I could just see my health going downhill. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "My husband and I had been taking these product for about 2 months when I suddenly discovered that I could actually walk upright again without being hunched over and my mobility has improved greatly, I started noticing the arthritic bumps on my hands have started to go down and my fingers seem like they are becoming straighter.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "The Shiaqga is the only change I have made to my lifestyle.  I’m so excited this has made me want to continue on the journey to good health.  Thank you so much for introducing me to your product, it's a lifesaver.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Leanna Bush",
		"selectedConditions": [
			"arthritis"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Windy M. 2020-01-06",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Its working great! Slowly returning back to my old self.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Windy M.",
		"isArticle": true
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"energy"
		],
		"delta": {
			"ops": [
				{
					"insert": "​Cheryl B. 2019-04-25",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I love the Shiaqga. I have been using it for quite some time. Originally it was for some minor health conditions which the Shiaqga took care of rather quickly. I am now using the Shiaqga as a preventative and for my long term heath routine. I find that I avoid the illnesses that I would normally have picked up from my work. I also have more energy and feel a lot better. Thank you for this great product."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "​Cheryl B."
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Alison F. 2019-07-25",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "The lump in my breast tumor reduced in size by half within taking my first two bottles. All of this without the doctors chemo!!!!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Alison F.",
		"selectedConditions": [
			"tumors"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Emilie B. 2019-10-14",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thank you so much. After the first initial detox, I recovered my energy and started to feel much better. Now after a couple of bottles I can truly say it has been years since I have felt this good.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"isArticle": true,
		"author": "Emilie B."
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Delilah T. 2019-12-08"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "We love this product. Have been taking it for 3 weeks. I sleep soundly through the night. I have some skin issues and they are not itching & going away. I have tinnitus and it seems to be less annoying. Hopefully it will eventually be gone. My husband has prostate cancer and he only gets up once a night. We are going to get his PSA checked in another month to see what that reading is.."
				},
				{
					"insert": "\n"
				},
				{
					"insert": "We will continue to take Shiaqga . Everyone should be taking it even if you have no issues. I think it’s a good",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Immune builder and preventative product.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"sleep"
		],
		"author": "Delilah T."
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "PRC -Gina H 2020-05-18",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I could not live without it"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "PRC -Gina H"
	},
	{
		"author": "Seidu A.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Seidu A. 2020-06-06"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "A great product by all standards! My product arrived in a beautiful package, and my vitality and confidence is at its peak"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"eyes"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Debbie M. from Sarasota, FL",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"We absolutely love this product and have taken for years.  I have taken for my cancer diagnosis 13 years and my husband 3 years ago.  Since I can't say it cured per FDA (but we both are cancer free), I will say it helps us keep it away in my personal opinion.  My husband took it for his eyesight Vein Occlusion where he was losing his site in one eye.  You have to get shots in your eye monthly for years in most cases - his doctor was amazed when his eyesight was back to normal in 6 months and no more shots needed - he said this has never happened in his practice.  We will keep taking it.  I would recommend people research this great product by clicking on the references section on their website.  Thank you so much for having the best brand I have been able to find.\" "
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Debbie M."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Mike D. 2020-02-28"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My sister's tumor is shrinking. Down from 5.2 cm to 3.1. It seems to be working super well. Doctors were surprised because she has not started their recommended treatment yet"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Mike D.",
		"selectedConditions": [
			"tumors"
		],
		"isArticle": false
	},
	{
		"selectedConditions": [
			"diabetes"
		],
		"author": "DORIN C.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "DORIN C. 2019-09-30"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "HI, THIS PRODUCT IS A MIRICAL HELP ME AND MY MOTHER FOR ALL HELTH PROBLEM, THE PANIC ATAK HAS BEEN GONE AND DIABETIC LEVEL HAS DICRISE, THE ONLY WAY TO SEE IF WORK IS TO TRY THIS PRODUCT AND YOU CAN SEE THE DIFRENT, IT IS A AMAIZING. THANKS",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Gail H. 2020-7-1",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have had many successful breakthroughs since using Shiaqga.  I have been cured of cancer and Covid-19.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Gail H.",
		"selectedConditions": [
			"covid-19"
		]
	},
	{
		"selectedConditions": [
			"cancer"
		],
		"author": "​Deean G.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "Deean G. 2019-07-25",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Prostate cancer gone in four months. Keeping myself healthy doing the regular Shiaqga each day."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Dawn D. ",
		"isArticle": false,
		"selectedConditions": [
			"cancer"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Dawn D. 2019-06-20"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "We received Shiaqga five weeks ago and my blood count - both white and red came back completely normal -- they were out of range due to a cancer diagnosis. We could not believe that it also brought down my blood pressure to the lowest it has been in years. By accident I dropped the bottle on a brick floor and in wiping it up, it cleaned my floor and made my house smell wonderful! I called and reordered after the Shiaqga was all over the floor and they shipped it out the same day. They have very good customer service! I recommend this product for anyone with immune issues or fighting cancer.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Signe J. 2019-06-29"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am thrilled with the results. I am feeling well and my brain is alive and I am active.The delivery is always very prompt. I believe this is the cure for cancer and recommend it is tried.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Signe J.",
		"isArticle": true
	},
	{
		"selectedConditions": [
			"sores/open wound on body"
		],
		"author": "JD.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "JD. 2019-02-15",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am in good health but use the Shiaqga to keep me that way. Here are two reports. 1. I had my brother use a few drops a day of the Shiaqga in an open festering wound he had for over a month. In three days it was majorly better and in just over a week it was completely healed. 2. This year a bad flu bug went around our town. People were getting sick everywhere. I went to the bank, post office, and grocery store and came in direct contact with several miserable coughing people in each place I visited. Still I did not get sick at all. I feel I am in better health because of the Shiaqga."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Cheryl B. 2019-04-25"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been using Shiaqga for quite some time now. Originally it was for some small health issues that went away rapidly. I love the stronger Super Concentrate even better. Wonderful results in keeping myself free from illness and staying healthy. Thank you for this wonderful product."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Cheryl B."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Sandy C. 2020-02-20"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Just been using it for a few weeks and I really like it. I have more energy and some of my little concerns have went away.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"energy"
		],
		"author": "Sandy C.",
		"isArticle": false
	},
	{
		"author": "​George J.",
		"selectedConditions": [
			"blood"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "​George J. 2019-10-23"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Shiaqga has helped in my CLL counts. I have been taking it 2 months and my white blood cell count has gone down and my platelet count has gone up higher than it has been in years.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "FRED S. 2019-09-15"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I've had an excellent experience with this product . It gives me an incredible amount of energy and mental clarity yet with a tremendous sense of calmness and well being . Truly an excellent addition to my health supplement routine",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"energy"
		],
		"author": "FRED S.",
		"isArticle": false
	},
	{
		"author": "Tammy M.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Tammy M. from Fulton, NY (07-21-2020):",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "​"
				},
				{
					"attributes": {
						"color": "#1d2228"
					},
					"insert": "The Super Concentrate is amazing.  My friend purchased some . . . and her daily back pain stopped -- no need for Ibuprofen.  She also has head tremors from a car accident and broken neck.  Her tremors ceased by 70% just in 2 days.  It is truly a healer!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"back"
		]
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Johannes D. from Tavares, FL :",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My husband was diagnosed in May with bladder cancer and began Shiaqga right away.  On his last check up - doctor said no tumors were there and only scar tissue left.  We are very pleased with this product."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"cancer"
		],
		"author": "Johannes D."
	},
	{
		"isArticle": true,
		"selectedConditions": [
			"generic"
		],
		"author": "Steven B.",
		"delta": {
			"ops": [
				{
					"insert": "Steven B. 2019-10-14",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This stuff really works. It supercharges your own immune system!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Ray F. 2019-11-25"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am seeing my blood sugars come back into balance and feeling better with more energy",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Ray F.",
		"selectedConditions": [
			"diabetes"
		]
	},
	{
		"selectedConditions": [
			"sores/open wound on body"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Suzie T.'s Email Review & Pictures",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I was introduced to Shiaqga just very recently and wanted to share my experience. I have been a healer and complementary therapist for many years and always believed that the body has an immense ability to heal itself given the right conditions. When I read about Shiaqga I was so impressed and intuitively knew this was genuine and uniquely powerful so I bought some immediately. My experience I want to share is about my beautiful cat called B.B. who recently developed a massive boil on his back which no matter what I tried didn’t stop the growth or obvious pain he was in, as he constantly licked and pulled out his fur. So I put just one drop directly on the sore once a day and within a few days it showed signs of reducing. He hated me touching it for first 5 days but then lay still whilst I rubbed it in so clearly he was no longer in any discomfort. Within 2 1/2 weeks it vanished and now the fur has grown back. I am so thrilled and grateful to have found Shiaqga and will continue to share this amazing Native American herb with others. Thank you so much for bringing it into the market so we all can benefit from it’s natural immune boosting properties. Nature definitely knows best. Thank you again 🙏🙏🙏 the first photo is after using Shiaqga for about three days, the silver looking area is the reducing of information as before I started the whole area was raised and red, and was about 2” in diameter.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Suzie T."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Sharen M. 2019-06-18",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have used the Shiaqga through another company for many years. I love it. I feel better while I am on the supplement and I literally have people tell me how young I look. I went off it for about six months because the other company changed the formula and it was no longer working like before. I noticed that I stopped getting my complements on my appearance and I did not feel as good. I started back on the Shiaqga and in a few weeks I noticed people starting to complement me on my skin and appearance again. I felt better too.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"youthful appearance"
		],
		"isArticle": false,
		"author": "Sharen M."
	},
	{
		"author": "Janett S.",
		"isArticle": false,
		"selectedConditions": [
			"energy"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Janett S. 2019-04-04"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am a personal trainer and I love the Shiaqga. The main things I notice is extra energy, more regularity in the bathroom, I avoid the local flu viruses, and my down time from my workout routine has been cut in half.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"generic"
		],
		"isArticle": true,
		"author": "Max R.",
		"delta": {
			"ops": [
				{
					"insert": "Max R. 2019-10-03",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am now into my third bottle and have really started to notice the healing process. (It was slow at first but started to pick up.) I have been so long without any hope and have not felt this good in over ten years. Thank you so much for this wonderful product."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Julie M. 2019-04-08"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This is my number one supplement for keeping myself and my family healthy. I would highly recommend it to anyone.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Julie M.",
		"isArticle": false
	},
	{
		"isArticle": false,
		"author": "Paul Dean",
		"selectedConditions": [
			"viruses"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Paul Dean from Stockton, MO"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​I love the Shiaqga product.  Having spent many years with alternative health care, the Shiaqga product is the best “healer” I have ever encountered.  I just wanted to express my gratitude for your product and share some of my experiences with you. "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am already in excellent health and I only started to take your product because I always want to maintain my healthy life.  I started taking the Shiaqga during the winter to build up my immune system.  Immediately, I notice that I was having more energy.  That was very good because I’m always on the go and sometimes my energy level runs low."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Next, I noticed that I was not getting the flu.  Since I come into contact with a lot of sick people, I usually will pick up a sickness every few months or so. "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Let me share with you an example: A friend and I went over to visit another sick friend.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This sick friend had been out of work for a week due to a very bad virus. Well a few hours after we left, I started feeling flu like symptoms.  I decided to take and extra dosage of Shiaqga, and went to bed.  The next morning I woke up feeling 100% better."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "This was great considering the friend that went with me also started to feel the flu like symptoms that night.  Since he is not into alternative healing, he went and visited his doctor for assistance, and ended up missing two weeks of work, due to his feeling so bad.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I absolutely believe that we both contacted the same virus.  I processed the virus, while I slept, using the Shiaqga, while my friend took two weeks to get over the same bug.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Wow, what a difference."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "After going through the winter season, and being on the Shiaqga product for four months, I experienced another wonderful benefit.  My seasonal allergies were gone!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Every year, for as long as I can remember, when Spring rolled around, so did my feeling bad.  My nose would constantly run, my eyes would be itchy and red, and generally I would feel quite miserable.  Since taking the Shiaqga, I have experienced a healing miracle.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I also have to share with you another experience.  I was testing a new alternative health care product for a company.  Before I went on their product I had my blood work done and everything was looking great.  After I was on their product for thirty days, I had my blood tested again.  To my horror, my blood was saturated with microscopic pieces of aluminum.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Immediately, I had my wife test her blood, to see if she was contaminated too.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Since her blood was clear of aluminum, I concluded it was the new product I was testing. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I had the product analyzed and found it contained a large quantity of aluminum.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I contacted the company to tell them of my findings, and to find out what was going on. After they reviewed their manufacturing process, they concluded that the problem was within their mixing process.  They had been mixing the product in an aluminum container, and during that process microscopic pieces of aluminum were being ground off and contaminating the product.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "To fix my heavy metal problem, I started to double dose the Shiaqga.  When I had my blood work done about forty days later, I was completely clear of all contamination, and was back to my healthy self.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Once again, thank you for your integrity, and for this miracle in a bottle.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"blood pressure"
		],
		"delta": {
			"ops": [
				{
					"insert": "Kristeen D. 2019-02-04",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have been on the Shiaqga for a few years now. I find it improves my overall health dramatically. Literally, I stay healthy while my coworkers are sick. My mother also takes it and she is no longer on her high blood pressure and other medications. She said she has not felt this good in decades.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Kristeen D."
	},
	{
		"selectedConditions": [
			"fibromyalgia"
		],
		"isArticle": false,
		"author": "Theresa W.",
		"delta": {
			"ops": [
				{
					"insert": "Theresa W. from Grovetown, GA",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"When I heard about the Shiaqga, I wasn’t sure if it was something I would try or not.  I have had quite a few health issues in my lifetime, and as you know, they just keep adding up the older you get.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I’ve had migraines since I was about 9 years old, and that was something I wasn’t sure that Shiaqga even dealt with."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was diagnosed with Hypothyroidism about 5 or 6 years ago. This was changed to a diagnosis of Hashimoto’s Disease, when further testing showed the extent of my thyroid problems."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Two or three years ago, my primary care doctor sent me to a Rheumatologist, due to my having trouble sleeping and being in constant pain.  The Rheumatologist did a few “hands on” tests, and immediately said, “Fibromyalgia”."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My first thought was, “Oh, great!  Now what!” I had heard of this disease before, and was now aware as to why I seemed to get sick all the time.  I was working in the medical field, as an MA and would catch every little thing that came along.  Fibromyalgia is an AutoImmune disease and now I knew “why” my immune system didn’t seem to protect me from much."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I was later sent for sleep studies, and it was discovered that I never really fell into a deep sleep, and therefore was “always” tired. These sleep studies were run, due to seizures that I was experiencing in my sleep.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "As you guessed by now, I was placed on several different medications during this time and the cost alone, were outlandish!  The side effects were a “whole ‘nother story”, so to speak.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Daily functions of living were becoming more and more of a hassle and I was living in a “fog” of sorts.  My Rheumo doctor called it “Fibro-fog”.  All I knew, was that I didn’t want any more to do with it, or the “hot pins” pain in my neck, shoulders, shoulder blades, back, etc… anymore.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Then I found Shiaqga!  The first thing I noticed, was that the “fog” became less and less, and I was actually “awake” all day long!  Next, I discovered that my sleep patterns seemed to level out and I actually awoke in the mornings feeling refreshed!  The pain has lightened. No more headaches every day, and the skin cancer on my nose even seems to be fading away!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Wow! I haven’t been “sick” with anything more than the sniffles for the past 6 months!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "A kitten had been playing with my arm, and scratched it. I ended up with a hole being eaten away in my arm, from a fungal/bacterial infection that set in to the puncture wound. The fact that it hadn’t spread all over my body amazed my primary care provider, and the only thing different in my system was the Shiaqga!  I put the Shiaqga directly onto the wound. Within 3 days, the hole was completely closed and “new” skin was even growing back.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"bowels"
		],
		"author": "Terry D.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Terry D. 2019-06-14",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I purchased these to work on some bowel and body issues. This is a wonderful product to keep me regular. It gets five stars for how effective it is."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Julie C.",
		"isArticle": false,
		"selectedConditions": [
			"seasonal allergies"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Julie C. 2019-05-20"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am off my allergy medication. I have more energy and feel much better.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "​Dave B. 2019-10-03",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am feeling better!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "​Dave B.",
		"isArticle": true
	},
	{
		"author": "Ryan Jason Y.",
		"isArticle": false,
		"selectedConditions": [
			"viruses"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Ryan Jason Y. 2020-06-09"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have been using their shiaqga original formula for about two years. I truly believe in their product as I feel during times when my immune system is low, it helps me fight off all the bugs that is going around. When my throats feels discomfort, I usually take a couple of drops and feel much better. The high quality of ingredients they use truly makes them stand out from the rest. When economically it's tough to spend on extras, I still think it worth buying their products. As this is one product, I will always try to have in my pantry for my family. Please continue to make the same product. Thank You.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": true,
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Christopher F. 2020-02-02",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Amazing products.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "From nature with love.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thank you so much.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Christopher F."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "James H. from Temple, TX:"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am very, very pleased with your products.  It has completely reversed my throat cancers and my cancers on my face.  (02-04-2020)"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"cancer"
		],
		"author": "James H."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Noble Tyronne M. 2020-02-1",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "4",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am still waiting on that BLAST of energy. But, fell better as of now."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Noble Tyronne M.",
		"isArticle": false,
		"selectedConditions": [
			"generic"
		]
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"oxygen"
		],
		"author": "​Debra Y.",
		"delta": {
			"ops": [
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Debra Y. 2020-06-05"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This product is a great organic product that works. I've been taking it for about a month and inflammation has decreased and allergies are not bothering me anymore!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"cancer"
		],
		"delta": {
			"ops": [
				{
					"insert": "Joy U 2020-05-23",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My husband was diagnosed with lung cancer in May of 2019. I read about your products with much interest in Feb. of 2020. His cancer (very small lesion on his lung) had spread to a nearby lymph node and to his liver. He had been through two chemo therapies at that time. I ordered the Shiaqga Super Concentrate and got him started on two full dropper fulls of the Shiaqga in Feb. His last PET scan showed no cancer on the liver or the lymph node. The Dr. dropped him from a 5 day a week chemo and he starts a 3 day treatment on May 26th. I am praying that his next PET scan in a couple of weeks shows even more improvement. God bless you is my prayer for this product...…. God is in Control. Joy Underwood, Tallahassee, FL",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Joy U",
		"isArticle": false
	},
	{
		"selectedConditions": [
			"lumps"
		],
		"author": "J. Cech",
		"delta": {
			"ops": [
				{
					"insert": "J. Cech from Orland Park, IL",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"My curiosity and drive to find new “natural” products for my pets and myself made it easy to try your product Shiaqga.  My 15-year old male Dalmatian, Jorge . . . has a lump on his right side for about two years, and over time, it became larger.  He also has a large lump on the side of his neck which has fluid in it.  "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Being too old and weak for any type of surgery, our hands were tied.  One day after being on Shiaqga for perhaps six weeks, I noticed the hair around his tumor on his side was sticking out.  There was a scab on part of the lump.  The scabbed section was flatter.  A week or two later it reddened, and then another scab appeared on another section.  I was astonished at what I saw.  "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am happy to report that the lump has gone down by two-thirds its original size.  Also, the large lump on Jorge’s neck went down to about half its size.  During this allergy season, I have not seen Jorge bite his feet or other parts of his body, and he is not taking any steroids or medications for allergies."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This product is amazing!  I, too, take Shiaqga as I had part of my lung removed and suffer from upper respiratory infections.  To date, I am happy to report that I became sick once so far while on Shiaqga, but was able to recover without antibiotics!  Shiaqga is a wonderful product that really works.\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"selectedConditions": [
			"generic"
		],
		"author": "Karen G.",
		"isArticle": true,
		"delta": {
			"ops": [
				{
					"insert": "Karen G. 2019-10-31",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I love your Super Concentrate. The new 20x formula is noticeably stronger. Thank you so much for keeping my family healthy.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"energy"
		],
		"author": "Judy V.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Judy V. 2020-02-19"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Ever since I’ve been using Shiaqga it seems like I have more energy. I also notice that it has helped my fibromyalgia I will keep taking it as long as I can afford it."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Jan B.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Jan B. from the UK: "
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Luna's cancer update. "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "No words needed   going, going, gone."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "It was a vascular cancer growth diagnosed by our vet.  She sent us home to sit and wait to see what happened.  They didn’t want to remove as it would leave an open wound.   Which on her paw would have been impossible to keep clean.  So Gill recommended your product.  So happy we tried and the results speak for themselves in around 6-7 weeks from starting the treatment. "
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"sores/open wound on body"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Paul Dean from Stockton, MO",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​I love the Shiaqga product.  Having spent many years with alternative health care, the Shiaqga product is the best “healer” I have ever encountered.  I just wanted to express my gratitude for your product and share some of my experiences with you. "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am already in excellent health and I only started to take your product because I always want to maintain my healthy life.  I started taking the Shiaqga during the winter to build up my immune system.  Immediately, I notice that I was having more energy.  That was very good because I’m always on the go and sometimes my energy level runs low.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Next, I noticed that I was not getting the flu.  Since I come into contact with a lot of sick people, I usually will pick up a sickness every few months or so. "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Let me share with you an example: A friend and I went over to visit another sick friend."
				},
				{
					"insert": "\n"
				},
				{
					"insert": "This sick friend had been out of work for a week due to a very bad virus. Well a few hours after we left, I started feeling flu like symptoms.  I decided to take and extra dosage of Shiaqga, and went to bed.  The next morning I woke up feeling 100% better.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This was great considering the friend that went with me also started to feel the flu like symptoms that night.  Since he is not into alternative healing, he went and visited his doctor for assistance, and ended up missing two weeks of work, due to his feeling so bad."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I absolutely believe that we both contacted the same virus.  I processed the virus, while I slept, using the Shiaqga, while my friend took two weeks to get over the same bug.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Wow, what a difference."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "After going through the winter season, and being on the Shiaqga product for four months, I experienced another wonderful benefit.  My seasonal allergies were gone!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Every year, for as long as I can remember, when Spring rolled around, so did my feeling bad.  My nose would constantly run, my eyes would be itchy and red, and generally I would feel quite miserable.  Since taking the Shiaqga, I have experienced a healing miracle."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I also have to share with you another experience.  I was testing a new alternative health care product for a company.  Before I went on their product I had my blood work done and everything was looking great.  After I was on their product for thirty days, I had my blood tested again.  To my horror, my blood was saturated with microscopic pieces of aluminum.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Immediately, I had my wife test her blood, to see if she was contaminated too."
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Since her blood was clear of aluminum, I concluded it was the new product I was testing. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I had the product analyzed and found it contained a large quantity of aluminum.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I contacted the company to tell them of my findings, and to find out what was going on. After they reviewed their manufacturing process, they concluded that the problem was within their mixing process.  They had been mixing the product in an aluminum container, and during that process microscopic pieces of aluminum were being ground off and contaminating the product.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "To fix my heavy metal problem, I started to double dose the Shiaqga.  When I had my blood work done about forty days later, I was completely clear of all contamination, and was back to my healthy self."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Once again, thank you for your integrity, and for this miracle in a bottle."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"seasonal allergies"
		],
		"author": "Paul Dean"
	},
	{
		"selectedConditions": [
			"generic"
		],
		"author": "Brando H.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Brando H. 2020-05-18",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I absolutely reccomend this products to anyone with a compromised immune system, or even if your like me and living healthy. This product has help me through the smallest illnesses. I very rarely get sick, maybe once every 3yrs",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Bonnie Woods",
		"delta": {
			"ops": [
				{
					"insert": "Bonnie Woods, Savannah, GA",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"Three years ago this coming July, I fell and broke my right ankle so bad that my foot hung off to the side.  It took surgery, a plate and several screws to put my ankle back together."
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was also told by the surgeon that I had soft bones."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "3 months in a wheel chair and two more months in a special boot using a knee scooter later, I was finally able to stand for short periods of time.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Since this time almost 3 years later, I still walked with a limp, and had pain in my left hip and leg even at night when trying to sleep.  Also, I have arthritis in my forefinger and middle finger on my right hand, and over the past 6 months this has also become a problem and source of great pain in first my right thumb and then my left thumb, which meant I could no long crochet, something I enjoy doing."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "For the past 3 years with the advice of the surgeon and friends I started taking Glucosamine, Calcium, D3, and K2, nutritional supplements that are supposed to help strengthen bones.  These may have helped, but the fact remained, I still walked with a limp, and still had pain in my left leg, and pain from arthritis continued to increase.  The sad thing is at age 61 pain and discomfort seemed to becoming a normal thing."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "A month ago I ordered Shiaqga and in just one month I am now walking for 30 minutes daily with my husband and not limping.  No more pain in my left leg or hip, or my thumbs and fingers.\" ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"arthritis"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "​Linda S. 2020-05-18"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Been a year on the product and still loving it.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"generic"
		],
		"author": "​Linda S."
	},
	{
		"selectedConditions": [
			"cancer"
		],
		"author": "Gail H.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Gail H. 2020-7-1"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": " ",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "had many successful health breatkthroughs since using Shiaqga.  I have been cured of cancer and Covid-19.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"author": "Alfred M.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Alfred M. 2019-09-17"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I use it for my regular health protocol. It is keeping me healthy.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Karen L. 2020-03-13"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Great immune support!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Karen L.",
		"isArticle": false
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"lyme disease"
		],
		"delta": {
			"ops": [
				{
					"insert": "Julie B. from Myrtle Creek, OR (05-18-2020)",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I'm on my second bottle of SHIAQGA, and I am amazed at the positive results so far. I take dozens of high-quality supplements daily, but I've never taken a product that had me racing to the fridge each morning to take the next dose! I've battled the ravages of chronic Lyme & coinfections for 6+ years to the point of muscle wasting, paralysis, severe cognitive decline, and near death. Although, I had slowly recovered myself holistically to 85% using a laborious strict protocol and diet, I could not achieve complete wellness no matter what I did. After using SHIAQGA Super Concentrate for a short time, I am quickly seeing long sought-after improvements including more energy (walking 3 - 5 miles daily), gut healing, tissue repair, less Mast Cell reactions, and a general feeling of wellness!! I'd put myself at 90% recovered now, and I'm looking forward 100% recovery in the next few months--AND finally getting my life back!! Lyme & coinfections rapidly ages you, damages organs and tissues, causes chronic fatigue, joint and muscle pain, a host of debilitating neurological issues. I can literally feel my organs & tissues healing and repairing daily. I only wish I had known about SHIAQGA Super Concentrate sooner--it could have saved me years of my life suffering while researching like a mad scientist and endless trial and errors to find something to heal my body. Once I am completely healed, I will continue on the maintenance dose for life of this AMAZING, mind-blowing product!! PS: It tastes GREAT!! My body craves it. I love SHIAQGA!!♡♡♡ \"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Julie B."
	},
	{
		"author": "Denise H.",
		"delta": {
			"ops": [
				{
					"insert": "Denise H. from Great Falls, MT",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"I have seen huge benefits and differences when taking this.  Its amazing.\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"isArticle": false
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Evelyn B. 2019-05-13"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My kidney function continues to climb. Doctors are astounded.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Evelyn B.",
		"selectedConditions": [
			"kidney"
		]
	},
	{
		"isArticle": false,
		"author": "Daniel S.",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Daniel S. 2019-11-19"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "so far so good.ill know more after my next blood teat"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Kelly K.",
		"delta": {
			"ops": [
				{
					"insert": "Kelly K. 2019-11-22",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I believe the Shiaqga is the reason my cancer is going away. Before I started on it, the tumor was still growing and now it is shrinking. Already it has reduced by 25% in just a couple months. All I did was add the Shiaqga to what I was already doing. Thank you for this miracle."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"tumors"
		]
	},
	{
		"selectedConditions": [
			"viruses"
		],
		"isArticle": false,
		"author": "Karen L.",
		"delta": {
			"ops": [
				{
					"insert": "Karen L. 2019-10-31",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Keeps me free from the \"flu bug\" that pops up at my workplace. I don't get sick like I did before. Thank you so much for this wonderful product.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "William C. 2019-11-16"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Shiaqga has helped my family with our immune system. Our 10 year old son had strip throat and the flu at the same time. My wife and I were taking shiaqga. My son and I had been drinking out of the same glass. I didn't get sick and neither did my wife."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"viruses"
		],
		"isArticle": false,
		"author": "William C."
	},
	{
		"isArticle": true,
		"author": "Rose Burton",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Rose Burton 2019-12-31",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you so much for your kind assistance with all my questions. I have seen the shiaqga working and my health has greatly improved. A little \"spicy\" on the flavor but I enjoy it."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "William C. 2019-01-02"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "During the first two months I noticed some small improvements with better energy and not catching the flu that went around. It really was into my third month that I started noticing the larger changes with my health. My arthritic bumps went down, I could now easily get out of my chair, and my mobility has improved. My blood pressure is now in the normal range as well. Thank you.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"viruses"
		],
		"author": "William C.",
		"isArticle": false
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Antonio T. 2020-01-21",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Working well with my lymes disease."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Antonio T.",
		"selectedConditions": [
			"lyme disease"
		]
	},
	{
		"isArticle": false,
		"author": "Antonio",
		"delta": {
			"ops": [
				{
					"insert": "Antonio 2020-02-14",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I've noticed more energy! I also noticed my working heart rate has gone down, you see I'm a runner! I run a mile and half in the morning then at night before I go to sleep! My working heart rate should be 158 ! I have finished my runs and my working heart rate has been at 140 maximum! When in the past I would finish my run my maximum working heart would 164 or 168, thats very dangerous!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"heart"
		]
	},
	{
		"selectedConditions": [
			"libido"
		],
		"isArticle": false,
		"author": "Joanne Togati",
		"delta": {
			"ops": [
				{
					"insert": "Joanne Togati 2019-10-15",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I bought 6 bottles to promote at a wellness event. I sold all 6 and have heard great feedback from the clients who are using it. One client in particular feels his libido has returned at 71 and his blood tests came back normal. He mentioned he has better circulation in his feet now than he has had in a while. Shiagqa affects many systems of the body and so it’s wonderful to hear all the benefits that come from its use.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Andy M. 2019-10-10"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Got over a lung condition that I have had for years. Thank you!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"respiratory"
		],
		"isArticle": false,
		"author": "Andy M."
	},
	{
		"author": "Barbara B.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Barbara B. 2019-03-27"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thank you for the new super concentrate. I can really feel the difference.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"generic"
		]
	},
	{
		"selectedConditions": [
			"lumps"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Liza P. 2020-06-05",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I recommended the Shiagqa to a customer of mine in the USA as her horse had a very bad infection in its eye and the vet wanted to remove his eye. So, I contacted her and said to get the horse on the mushroom as it would kill the infection."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "She put it on topically near to the eye. I received a message from her to say that the horse (Monty) has not lost his eye, is off eye medication, and the eye is improving everyday."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Another story is my mum's dog has just got a growth on her back so she put her on the pet immunity and also topically with the oil. In 3 days its shrinking and the color has changed from angry red to white and she has stopped chewing it .. so very happy Pip dog."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Liza P."
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Tammy C. 2019-12-05"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My husband take this every morning, and he feels great"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": true,
		"author": "Tammy C."
	},
	{
		"author": "​Ray F.",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "​Ray F. 2019-12-17",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have seen many people return to health using the Shiaqga."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"author": "J.J.",
		"isArticle": false,
		"selectedConditions": [
			"seasonal allergies"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "J.J. 2019-07-17"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been using Shiaqga for a little over a year now and I love it! I no longer have my seasonal allergies and I have not gotten sick (colds/flu) even when around sick people."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Anthony L. 2020-03-21"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I recently had prostate cancer surgery, so this product was taken to help my body heal internally, as there are stitches that I truly need to heal properly for resumption of previous activities. Prior to taking, internal itching was at an all-time high, but within two weeks on taking this product my clotting was passed and itching has gone away! I am still on the road to recovery, but believe my own body is doing well without any other medications. Thank You!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Anthony L.",
		"selectedConditions": [
			"cancer"
		],
		"isArticle": false
	},
	{
		"selectedConditions": [
			"viruses"
		],
		"author": "​JD.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "JD. 2019-02-15"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am in good health but use the Shiaqga to keep me that way. Here are two reports. 1. I had my brother use a few drops a day of the Shiaqga in an open festering wound he had for over a month. In three days it was majorly better and in just over a week it was completely healed. 2. This year a bad flu bug went around our town. People were getting sick everywhere. I went to the bank, post office, and grocery store and came in direct contact with several miserable coughing people in each place I visited. Still I did not get sick at all. I feel I am in better health because of the Shiaqga."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Jeannette W.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Jeannette W. from Perkasie, PA:"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "On 05-28-2020 after ten days on the 2oz Shiaqga Original Formula she emailed, \"Thanks for all your work and your patience with my questions.  I am slowly seeing some improvements, although I have nothing seriously wrong with me.  I assume people with real problems see improvements faster than those of us who are just dealing with middle age!  ;) ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Oh, by the way, my 15 year old quickly saw her persistent tonsil stone go away and the other tonsil looks healthy, too!  Thank you!\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Steve F. 2019-11-12",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I just used it on the son of a friend of mine who had serious bronchitis and was not responding to the doctors medicine. I had him take three squirts that night and three in the morning. By afternoon he was better. Great product"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"bronchitis"
		],
		"author": "Steve F."
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Stephen D. 2020-04-22"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Wonderful product!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Stephen D."
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"energy"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Julie C. 2019-05-20"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am off my allergy medication. I have more energy and feel much better.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Julie C."
	},
	{
		"selectedConditions": [
			"parkinsons"
		],
		"isArticle": false,
		"author": "Rusty C.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Rusty C. from Maramec, OK:"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I've been using shiaqga for about 4 months now.  It has given me more energy and relieved back pain and joint pain.  I had bladder cancer into the muscle and was recommended shiaqga and lemon oil.  I went in for testing and February and was given the all-clear sign for cancer.  I give a bottle of shiaqga to my dad who has Parkinson's.  He had Tremors very bad and had to shuffle his feet to walk.  He has been taking it for approximately 1 month and told me and it has helped slow with the trimmers down and he can walk much easier he plans on continue taking it.  Thank you very much.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Barbara C. 2019-10-29",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Seems to be helping with excessive phlegm in the throat. It feels very soothing and beneficial. Barbara Cavazos.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Barbara C.",
		"selectedConditions": [
			"respiratory"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Kristi A. 2020-02-08"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "The new formula is great."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Kristi A.",
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Julie M. 2019-10-28",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Chemo symptoms almost completely gone. My hair stopped falling out as well. Well worth it just for that. I am excited to see how things go in the next couple months."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"chemotherapy side effects"
		],
		"author": "Julie M."
	},
	{
		"author": "E. Thompson",
		"delta": {
			"ops": [
				{
					"insert": "E. Thompson from Anderson, IN ",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I just have to tell you that I am so excited & pleased since the first . . . Shiaqga that I took.  My blood pressure dropped from 148/64 to 125/54 & my brain fog cleared in a very short time!  My breathing is even improved – breathing deeper, with a feeling of wellness that I thought long gone! ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "       ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I thank God for who formulated this wonderful product & for the person who made sure that I tried it.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"breathing"
		]
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Karen L. 2019-12-04",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I purchase the Super Concentrate because is it a great deal on my budget for my family. (Instead of me purchasing 4 regular bottle I get this.) We go through a bottle in one month with each of us taking a little each day. The three day flu (really about a five day virus) has already went around my community. It was at my office and in the schools. None of my family, myself included, came down with it and we all were in direct contact with sick people.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": true,
		"author": "Karen L."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Debra Y. 2020-06-05",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This product is a great organic product that works. I've been taking it for about a month and inflammation has decreased and allergies are not bothering me anymore!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Debra Y.",
		"isArticle": false,
		"selectedConditions": [
			"seasonal allergies"
		]
	},
	{
		"author": "Diana C.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Diana C. 2020-02-13"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have been taking shiaqga for a few months. I love it. I believe and that it's helping my immune system. I would definitely recommend to anyone with health problems.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Judith",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Judith from Calgary, Alberta, Canada wrote: ",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I bought two of your Shiaqga tinctures about a month ago.  I have to say I'm impressed.  I have an underfunctioning (and quite swollen) thyroid.  I've received your tincture about two weeks ago and I have been using it (when I remember to take it) pretty much three times a day.  The swelling at my throat has reduced by a third.  That's impressive.  "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "As well, I've had some scars that are substantially reduced in size, colour and such.  "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My husband caught pneumonia over the holidays and has been taking it religiously.  He says he's now functioning at \"...ninety percent...\" which is astonishing because the last time he had pneumonia (about ten years ago) it took a good six to eight weeks to get him anywhere near that level of energy.  He's 69 years old, for heaven's sake!  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I'll be purchasing more.  No question."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"pneumonia"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Michael V. 2020-02-24"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This has assisted/cured my prostate cancer and I have found it also increased my libido, energy, and overall health."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Michael V.",
		"selectedConditions": [
			"cancer"
		]
	},
	{
		"selectedConditions": [
			"cancer"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Phil L. from Humansville, MO"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"When I was told that I had only weeks to live and that there was nothing that could be done, you might imagine that I was devastated.  My complete confidence had always been in the miracle of modern medicine.  But that miracle was not to be available to me. "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Despairing, I sought advice from a man I had met many years earlier while undertaking a vision quest among my people, the Nez Perce Indians of northeastern Idaho.  He told me to take the wood fungus known as \"Shiaqga\" and keep a piece of it in my mouth at all times.  Up to receiving this suggestion, I had been losing copious amounts of blood from the bowel as the disease literally ate me up from the inside.  I was dying.  So, even though I must admit I had always considered the wood fungi to be at best unsafe and at worst downright poisonous, what did I have to lose? ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I did what I was told and a miracle happened.  Within just a few short weeks the bleeding stopped.  Within a year my disease was in complete remission.  Now, the disease that was killing me and had engulfed my entire G.I. tract is almost completely gone.  The gift of the Earth Mother has given me back my life.\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Phil L."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Theresa W. from Grovetown, GA"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"When I heard about the Shiaqga, I wasn’t sure if it was something I would try or not.  I have had quite a few health issues in my lifetime, and as you know, they just keep adding up the older you get."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I’ve had migraines since I was about 9 years old, and that was something I wasn’t sure that Shiaqga even dealt with."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I was diagnosed with Hypothyroidism about 5 or 6 years ago. This was changed to a diagnosis of Hashimoto’s Disease, when further testing showed the extent of my thyroid problems.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Two or three years ago, my primary care doctor sent me to a Rheumatologist, due to my having trouble sleeping and being in constant pain.  The Rheumatologist did a few “hands on” tests, and immediately said, “Fibromyalgia”."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My first thought was, “Oh, great!  Now what!” I had heard of this disease before, and was now aware as to why I seemed to get sick all the time.  I was working in the medical field, as an MA and would catch every little thing that came along.  Fibromyalgia is an AutoImmune disease and now I knew “why” my immune system didn’t seem to protect me from much."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was later sent for sleep studies, and it was discovered that I never really fell into a deep sleep, and therefore was “always” tired. These sleep studies were run, due to seizures that I was experiencing in my sleep."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "As you guessed by now, I was placed on several different medications during this time and the cost alone, were outlandish!  The side effects were a “whole ‘nother story”, so to speak."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Daily functions of living were becoming more and more of a hassle and I was living in a “fog” of sorts.  My Rheumo doctor called it “Fibro-fog”.  All I knew, was that I didn’t want any more to do with it, or the “hot pins” pain in my neck, shoulders, shoulder blades, back, etc… anymore.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Then I found Shiaqga!  The first thing I noticed, was that the “fog” became less and less, and I was actually “awake” all day long!  Next, I discovered that my sleep patterns seemed to level out and I actually awoke in the mornings feeling refreshed!  The pain has lightened. No more headaches every day, and the skin cancer on my nose even seems to be fading away!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Wow! I haven’t been “sick” with anything more than the sniffles for the past 6 months!"
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "A kitten had been playing with my arm, and scratched it. I ended up with a hole being eaten away in my arm, from a fungal/bacterial infection that set in to the puncture wound. The fact that it hadn’t spread all over my body amazed my primary care provider, and the only thing different in my system was the Shiaqga!  I put the Shiaqga directly onto the wound. Within 3 days, the hole was completely closed and “new” skin was even growing back.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Theresa W.",
		"isArticle": false,
		"selectedConditions": [
			"sleep"
		]
	},
	{
		"author": "Carolyne S.",
		"isArticle": false,
		"selectedConditions": [
			"thyroid"
		],
		"delta": {
			"ops": [
				{
					"insert": "Carolyne S. from Oakland, California",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "“I have been diagnosed in the past couple of years with diabetes and thyroid problems and I have been having issues with headaches, and concentration and dizziness and all kinds of things...and I have been trying to avoid taking medicines and taking insulin, I have type 2 diabetes, what they call diabetes, but I’ve been taking pills and still not seeing results that I wanted. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "About 2 months ago a friend . . . heard about what I was going through and recommended it to me, so I immediately ordered the Shiaqga. . . The 1st thing, I was able to decrease my insulin pills in the first month. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "By the end of the second month I had noticed that I had lost about 7 pounds. . . I did take it in the morning and in the evening and seven pound had just dropped off of me drastically... ...another thing, I had been having problems with my blood pressure and hypertension with the diabetes and the blood pressure has been very high for a long time.  Frightening, as a matter of fact. . . and yesterday on the 5th, they had been taking my blood pressure and my blood pressure was 108 over 80!  I haven’t had a reading like that in YEARS! "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I know it’s the Shiaqga. . . The lump on my thyroid is  going down and I was so stunned it’s going down, it’s going down so much , if you could see it was protruding and now I can barely touch it and  you could feel it there and I’m so happy,  thank you all for just being there.  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Thank you all for doing what you are doing, it is really healing my body. . . It’s amazing, it’s amazing!  I’m a witness; I’m definitely a witness of what Shiaqga does.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "FRED S. 2020-02-22",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My bottles arrived on time and were well packaged. I was even given 2 additional free bottles to help me fight my condition . Thank you",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "FRED S.",
		"isArticle": false,
		"selectedConditions": [
			"generic"
		]
	},
	{
		"selectedConditions": [
			"blood pressure"
		],
		"delta": {
			"ops": [
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Linda S. 2019-05-20"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "High blood pressure back to the normal range. Thank you for this wonderful product."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "​Linda S."
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"kidney"
		],
		"author": "Bill J.",
		"delta": {
			"ops": [
				{
					"insert": "Bill J. 2019-03-13",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I love the new Super Concentrate! My kidney function is increasing and I am feeling in much better health. Thank you for your support."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"author": "Janice S.",
		"delta": {
			"ops": [
				{
					"insert": "Janice S. 2020-05-18",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I love this product. With all the virus issues going on it's co comforting to know that my body is building a strong immune system. Thank you again for this miracle concentrate!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		]
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "PRC -Gina H. 2020-02-26"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "The supplement is absolutely awesome it’s hard for me to make it through the day without it"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "PRC -Gina H."
	},
	{
		"isArticle": false,
		"author": "Julie G.",
		"selectedConditions": [
			"energy"
		],
		"delta": {
			"ops": [
				{
					"insert": "Julie G. 2019-10-11",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I got this for my mother who has been in very poor health over the last year. Already she says she is feeling better, has more energy, and is moving around much better."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"author": "Paul M.",
		"selectedConditions": [
			"viruses"
		],
		"delta": {
			"ops": [
				{
					"insert": "Paul M. 2019-06-03",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Love the super concentrate, whenever I feel something coming on, the shiaqga takes care of it right away. By far the best all around product for health issues there is!!! Thanks for making it available to the public. Blessings"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "William C.",
		"delta": {
			"ops": [
				{
					"insert": "William C",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " . "
				},
				{
					"insert": "2019-01-02",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "During the first two months I noticed some small improvements with better energy and not catching the flu that went around. It really was into my third month that I started noticing the larger changes with my health. My arthritic bumps went down, I could now easily get out of my chair, and my mobility has improved. My blood pressure is now in the normal range as well. Thank you."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"arthritis"
		],
		"isArticle": false
	},
	{
		"author": "Janie C.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Janie C. 2019-02-01"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Its been two months now and my health and oxygen levels have improved greatly. I am now taking less medications and feeling better than I have in many years. Thank you for this amazing product."
				},
				{
					"insert": "\n"
				},
				{
					"insert": "INFLAMATION",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"oxygen"
		]
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Dr. Katalina D. 2019-05-09",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I used the original Shiaqga formula with wonderful results on myself and my patients. It has been a month with me experiencing the Super Concentrate and I can clearly notice an improved difference. Wonderful product."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Dr. Katalina D."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Frank, from the Mississippi Gulf Coast"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I damaged my shoulder 2 years ago in a bad fall and broke a rib also.  I could not lift my arm over my head for over a year and a half.  I don’t go to doctors and I tried some other products, but none of them helped.  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "I ordered Shiaqga and in only three days I was surprised to see that I could lift my arm with no pain at ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "ALL",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": ".  The pain was all gone.  ​Now, 2 months later, the pain is still gone and the ringing in my ears is almost gone too.  This is a Miracle from above.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Frank",
		"selectedConditions": [
			"injury"
		]
	},
	{
		"author": "Bonnie Woods",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Bonnie Woods, Savannah, GA",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"Three years ago this coming July, I fell and broke my right ankle so bad that my foot hung off to the side.  It took surgery, a plate and several screws to put my ankle back together.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I was also told by the surgeon that I had soft bones."
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "3 months in a wheel chair and two more months in a special boot using a knee scooter later, I was finally able to stand for short periods of time.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Since this time almost 3 years later, I still walked with a limp, and had pain in my left hip and leg even at night when trying to sleep.  Also, I have arthritis in my forefinger and middle finger on my right hand, and over the past 6 months this has also become a problem and source of great pain in first my right thumb and then my left thumb, which meant I could no long crochet, something I enjoy doing.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "For the past 3 years with the advice of the surgeon and friends I started taking Glucosamine, Calcium, D3, and K2, nutritional supplements that are supposed to help strengthen bones.  These may have helped, but the fact remained, I still walked with a limp, and still had pain in my left leg, and pain from arthritis continued to increase.  The sad thing is at age 61 pain and discomfort seemed to becoming a normal thing.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "A month ago I ordered Shiaqga and in just one month I am now walking for 30 minutes daily with my husband and not limping.  No more pain in my left leg or hip, or my thumbs and fingers.\" "
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"broken ankle"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Ray F. 2020-04-22"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thank you for your wonderful customer service.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Ray F.",
		"selectedConditions": [
			"generic"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Judy M. 2020-02-07"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I really like Shiaqga. Its an amazing product. I would like to keep it on hand as much as possible. Very healing!!!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Judy M.",
		"selectedConditions": [
			"generic"
		]
	},
	{
		"selectedConditions": [
			"generic"
		],
		"author": "Tanner F.",
		"delta": {
			"ops": [
				{
					"insert": "Tanner F. from Springfield, MO",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been enjoying the Shiaqga.  Thanks for the recommendation.  It's really been a nice catalyst for the remission of my personal health concerns that I have been working on the past few years. "
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"author": "Jan A.",
		"selectedConditions": [
			"lumps"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Jan A. 2019-06-13"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "MY LUMPS ARE GETTING SMALLER AND THE SORENESS IS ALMOST NON-EXISTENT!"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "S. Jacobsen 2019-04-19",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am 89 years old. I am doing well and looking good, feeling good and my brain is clear and active."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "S. Jacobsen"
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "​Murrey L. 2020-01-02",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "It was hard to notice improvement the first couple months, but now I have stuck with it six months. I now know my chronic health conditions have significantly improved. (You know, the sorry you have to live with this for the rest of your life conditions.) I have not felt this good for 15 years and am planning on seeing where I am with the shiaqga in a year. Thank you for giving me hope back."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": true,
		"author": "​Murrey L."
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "James C. 2020-02-28",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Very helpful for cancer, thank you"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"cancer"
		],
		"isArticle": false,
		"author": "James C."
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Amy A. from Littleton, NH (06-05-2020):"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "​",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been using the shiaqga super concentrate for 3 weeks.  I had labs this yesterday and they are better than ever.  I also dropped 9 lbs and my platelets are in normal range!!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Amy A.",
		"isArticle": false,
		"selectedConditions": [
			"blood"
		]
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Shelagh S. 2019-10-08",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I add a pinch of this to my dog's feed twice a day to help her with immunity issues. She has a cleft palate so missed out on her mother's colostrum. All good so far. Good value for money too."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		],
		"author": "Shelagh S."
	},
	{
		"author": "Alice A.",
		"isArticle": true,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Alice A. 2019-10-21"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My Mom is now walking around again and feeling better than she has in years. Very powerful healing medicine."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"generic"
		]
	},
	{
		"selectedConditions": [
			"generic"
		],
		"isArticle": false,
		"author": "Rosa P.",
		"delta": {
			"ops": [
				{
					"insert": "Rosa P. 2019-10-19",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I can’t complain. Taste great.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Kelly K. 2019-11-22"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I believe the Shiaqga is the reason my cancer is going away. Before I started on it, the tumor was still growing and now it is shrinking. Already it has reduced by 25% in just a couple months. All I did was add the Shiaqga to what I was already doing. Thank you for this miracle."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "​Kelly K.",
		"isArticle": false,
		"selectedConditions": [
			"cancer"
		]
	},
	{
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"insert": "Kristy M. 2020-03-13",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Great product! Please see my review for the super concentrated, as I purchased both. Please don’t stop producing these products, they are life savers.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Kristy M.",
		"isArticle": false
	},
	{
		"selectedConditions": [
			"diabetes"
		],
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Daniel S. 2019-10-28",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "too early to tell but mysugar and creatine numbers were down"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Daniel S."
	},
	{
		"selectedConditions": [
			"viruses"
		],
		"delta": {
			"ops": [
				{
					"insert": "Rebekah L. 2020-02-21",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Since finding this product I haven’t been sick in a year where as last year I was sick for a month well for a month sick for a month etc. I don’t have a spleen so I have a lower white blood count and this has been beyond a game changer. I am beyond relieved and impressed I tell everyone about it! Another interesting fact here that I kind of just put two and two together is I believe this product increases libido at least for me so for women. I am 42 very healthy I take care of myself and I didn’t have a decrease libido but this has been very interesting. Thank you so much you guys for keeping this product available and for keeping it so potent and pure and for always doing your best to keep the price reasonable. I can’t thank you enough! Buy this product! You won’t regret it.💕",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Rebekah L."
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Linda D. 2020-02-24"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you."
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Linda D.",
		"selectedConditions": [
			"generic"
		]
	},
	{
		"selectedConditions": [
			"cholesterol"
		],
		"isArticle": false,
		"author": "Wanda M.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Wanda M. from Indio, CA"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"My husband and I have been using Shiaqga for the last 8 to 10 weeks.  We have each had our blood lipids checked very recently at different locations.  Since Gordon’s last lab report of . . . his total cholesterol has gone from 183 to 145: good cholesterol (HDL) has increased while bad cholesterol (LDL) has decreased: triglycerides are now fantastic and his HDL/LDL risk ratio has dropped from being too high to being in the desirable range.  For a 78 year old who once had prostate cancer, he has great health and high energy."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have a genetic tendency to high cholesterol and triglycerides.  My recent blood test showed the best improvement I have ever seen in the 40 years I have been tracking this. . . my . . .cholesterol has dropped 43 points; HDL – for the first time I can remember – is in the normal range; LDL although still too high has dropped 25 points; triglycerides have gone from 316 to 182.  Coronary risk factor is down from high to a near normal range.  While taking Shiaqga my energy levels have allowed me to have more productive days and at age 71 that is a blessing."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am counting on Shiaqga as our first line of defense against the serious flu feared for this coming winter.\"  "
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Sharen B. 2019-10-11"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "My allergies, that I suffer through constantly, went away and I have more energy. Excited to see the long term effects that the stem cell activation has on my body.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Sharen B.",
		"selectedConditions": [
			"seasonal allergies"
		],
		"isArticle": false
	},
	{
		"author": "Frank G.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Frank G. 2019-09-17"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thank you. I have been using this for stomach issues and my health has greatly improved.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"stomach"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Laura T. 2020-01-26",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Wonderful product, fast shipping, highly recommend!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Laura T.",
		"selectedConditions": [
			"generic"
		],
		"isArticle": true
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Judith from Calgary, Alberta, Canada wrote: "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I bought two of your Shiaqga tinctures about a month ago.  I have to say I'm impressed.  I have an underfunctioning (and quite swollen) thyroid.  I've received your tincture about two weeks ago and I have been using it (when I remember to take it) pretty much three times a day.  The swelling at my throat has reduced by a third.  That's impressive.  "
				},
				{
					"insert": "\n"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "As well, I've had some scars that are substantially reduced in size, colour and such.  "
				},
				{
					"insert": "\n"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My husband caught pneumonia over the holidays and has been taking it religiously.  He says he's now functioning at \"...ninety percent...\" which is astonishing because the last time he had pneumonia (about ten years ago) it took a good six to eight weeks to get him anywhere near that level of energy.  He's 69 years old, for heaven's sake!  "
				},
				{
					"insert": "\n"
				},
				{
					"insert": " ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I'll be purchasing more.  No question.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"thyroid"
		],
		"author": "Judith",
		"isArticle": false
	},
	{
		"selectedConditions": [
			"energy"
		],
		"author": "Janice S.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Janice S. 2019-03-09",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have only been using Shiaqga for 3 weeks so it's a little early to tell if any significant changes are noticeable. I have a labral tear in my right hip and was told there is no blood supply to that area and that is my main focus at this point. I'm hoping this will eventually help my body heal that tear. I will report later, but I have noticed more energy and I'm hoping that internally it's doing lots or great things!"
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Francisca Epale",
		"delta": {
			"ops": [
				{
					"insert": "Francisca Epale, Certified John C. Maxwell Coach, Trainer and Speaker (Toronto, Canada)",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"After returning from China where I was teaching English, I suffered from insomnia and I was waking up several times during the night.  I ordered some Shiaqga and after it arrived, I was able to sleep peacefully throughout the night after taking it just two times.  I highly recommend this product.\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"sleep"
		]
	},
	{
		"author": "Barbara B.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Barbara B. 2019-07-15",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I have been taking it for about two weeks now and I am quite excited. I had a enlarged lymph in my armpit and other herbs and supplements I did not have any effect on reducing it. Since I have been on the Shiaqga it has gotten significantly smaller and I still have 1/2 the bottle left. Thank you. I will give you an update on my progress.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"lymph node"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Suzie T. 2020-01-26"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I love Shiaqga! I take it everyday and so do my two dogs ( the Shiagqa for canines). I caught a cold over Xmas and it cleared up in just record time. Very grateful to know about Shiaqga. Always sharing with others to promote their own health. Blessed",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"viruses"
		],
		"author": "Suzie T."
	},
	{
		"author": "Tina S.",
		"selectedConditions": [
			"generic"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Tina S. 2019-10-08"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This is one of the few pet supplements that all of my dogs can take without having GI distress."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"isArticle": false,
		"author": "​Magda A.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "​"
				},
				{
					"insert": "Magda A. 2019-10-22",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have 3 weeks taking it, so I can say I feel good with Lots of energy. I have to give it time to see how it work,for what I got it for"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"energy"
		]
	},
	{
		"author": "Barbara B.",
		"isArticle": false,
		"selectedConditions": [
			"lymph node"
		],
		"delta": {
			"ops": [
				{
					"insert": "Barbara B. 2019-07-15",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Part 2 -- I have been seeing such good results got another bottle before I was even finished with my first. My enlarged lymph node is now normal. I am feeling great with more energy. Thank you."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Wanda M.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Wanda M. from Indio, CA"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"My husband and I have been using Shiaqga for the last 8 to 10 weeks.  We have each had our blood lipids checked very recently at different locations.  Since Gordon’s last lab report of . . . his total cholesterol has gone from 183 to 145: good cholesterol (HDL) has increased while bad cholesterol (LDL) has decreased: triglycerides are now fantastic and his HDL/LDL risk ratio has dropped from being too high to being in the desirable range.  For a 78 year old who once had prostate cancer, he has great health and high energy.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have a genetic tendency to high cholesterol and triglycerides.  My recent blood test showed the best improvement I have ever seen in the 40 years I have been tracking this. . . my . . .cholesterol has dropped 43 points; HDL – for the first time I can remember – is in the normal range; LDL although still too high has dropped 25 points; triglycerides have gone from 316 to 182.  Coronary risk factor is down from high to a near normal range.  While taking Shiaqga my energy levels have allowed me to have more productive days and at age 71 that is a blessing."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am counting on Shiaqga as our first line of defense against the serious flu feared for this coming winter.\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"energy"
		],
		"isArticle": false
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"skin/hair"
		],
		"author": "Jamie C.",
		"delta": {
			"ops": [
				{
					"insert": "Jamie C. 2020-02-19",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Thank you. My dogs were having a little hard time taking it at first but then I just did a little and built up. Now they take it no problem. I have seen an improvement in their skin/hair and they are not scratching like they did before. Thank you.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"selectedConditions": [
			"blood pressure"
		],
		"author": "​Carolyne S.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "​Carolyne S. from Oakland, California"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"insert": "“I have been diagnosed in the past couple of years with diabetes and thyroid problems and I have been having issues with headaches, and concentration and dizziness and all kinds of things...and I have been trying to avoid taking medicines and taking insulin, I have type 2 diabetes, what they call diabetes, but I’ve been taking pills and still not seeing results that I wanted. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "About 2 months ago a friend . . . heard about what I was going through and recommended it to me, so I immediately ordered the Shiaqga. . . The 1st thing, I was able to decrease my insulin pills in the first month. ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "By the end of the second month I had noticed that I had lost about 7 pounds. . . I did take it in the morning and in the evening and seven pound had just dropped off of me drastically... ...another thing, I had been having problems with my blood pressure and hypertension with the diabetes and the blood pressure has been very high for a long time.  Frightening, as a matter of fact. . . and yesterday on the 5th, they had been taking my blood pressure and my blood pressure was 108 over 80!  I haven’t had a reading like that in YEARS! ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I know it’s the Shiaqga. . . The lump on my thyroid is  going down and I was so stunned it’s going down, it’s going down so much , if you could see it was protruding and now I can barely touch it and  you could feel it there and I’m so happy,  thank you all for just being there.  "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Thank you all for doing what you are doing, it is really healing my body. . . It’s amazing, it’s amazing!  I’m a witness; I’m definitely a witness of what Shiaqga does.\""
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"author": "Carl C.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Carl C. 2019-02-01"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Three months now and my cancer is in complete remission. My doctor calls it a \"spontaneous remission\" but I know its the Shiaqga. That is the only thing I have been doing different. You restored my health and my life!!!!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"cancer"
		],
		"isArticle": false
	},
	{
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Mike Farris from Bowdon, GA"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "\"I had a mole on my right forearm that started itching.  I put one drop of Shiaqga on it about 9am, by 3pm the mole appeared to be melting.  I treated it once more the next day and after 4 days the mole was completely gone.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "My 96 year old mother had a dime size lesion on her nose that the dermatologist said was a melanoma.  Surgery was recommended, but my mother declined.  Instead, she took Shiaqga for two weeks and she also applied one drop of Shiaqga to her nose daily until the spot cleared up.\"",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"author": "Mike Farris",
		"selectedConditions": [
			"mole or lesion"
		]
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Janett S. 2019-04-04",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am a personal trainer and I love the Shiaqga. The main things I notice is extra energy, more regularity in the bathroom, I avoid the local flu viruses, and my down time from my workout routine has been cut in half."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"viruses"
		],
		"author": "Janett S.",
		"isArticle": false
	},
	{
		"selectedConditions": [
			"multiple sclerosis"
		],
		"author": "Ray F.",
		"delta": {
			"ops": [
				{
					"insert": "Ray F. 2019-11-05",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "My MS (Multiple Sclerosis) symptoms have decreased over this last month. I think I will go try the Super Concentrate now. Thank you."
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"energy"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Magda A. 2020-03-03"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I love it give me a lot of energy"
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Magda A."
	},
	{
		"author": "Barbara M.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Barbara M. 2019-12-06"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I love this product. It is keeping me free from this serious illness that everyone has and is going around Atlanta, GA. I feel more energy and seem to be sleeping a lot better. I was not expecting the great taste. Normally supplements like this are so awful tasting."
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"energy"
		]
	},
	{
		"author": "Jean C.",
		"delta": {
			"ops": [
				{
					"insert": "Jean C. 2019-05-22",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "I am in good health but wanted to use the Shiaqga to keep me that way. I was using it a few months and then I stopped. It was only upon stopping that I realized what one of the things it was actually doing for me. While I was taking the Super Concentrate my normal painful mensuration stopped being painful. I did not attribute this to the Shiaqga until I stopped it and the painful mensuration came back. I went on the Shiaqga again and my next period was without pain. I now know its the Shiaqga that was doing this for me. Thank you! It is well worth me not having to go through that each month. . . plus the added bonus of the stem cells reversing or slowing down the aging process. I am now a fully loyal customer.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"menstration"
		]
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"pain"
		],
		"delta": {
			"ops": [
				{
					"insert": "Judy V. 2020-01-04",
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Well I’ve taken this now for over a month. I believe I feel more energy, less pain.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Judy V."
	},
	{
		"isArticle": false,
		"author": "Ken R.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					},
					"insert": "Ken R. 2019-08-19"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "After a few days my constipation is gone after decades of suffering. Constipation seems to block the manufacture of neurotransmitters in my gut, causing depression. Shiaqga has healed my gut of constipation & I had to quit using Metamucil because it was now causing diarrhea. I took Shiaqga for 30 days & after a week the constipation has not returned. I think Shiaqga was healing my gut caused by Chronic Fatigue Syndrome acquired in 1982 so I am ordering some more to continue the healing. Thanks Shiaqga!"
				},
				{
					"insert": "\n"
				}
			]
		},
		"selectedConditions": [
			"bowels"
		]
	},
	{
		"selectedConditions": [
			"energy"
		],
		"author": "Michael V.",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Michael V. 2020-02-24",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This has assisted/cured my prostate cancer and I have found it also increased my libido, energy, and overall health."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"insert": "Judy V. 2020-02-19",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Ever since I’ve been using Shiaqga it seems like I have more energy. I also notice that it has helped m fibromyagia I will keep taking it as long as I can afford it.",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "Judy V.",
		"selectedConditions": [
			"fibromyalgia"
		]
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"pain"
		],
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "​Ms. Karen D. 2020-06-02"
				},
				{
					"insert": "\n"
				},
				{
					"insert": "Bought this specifically for my grandmother because her caregiver contracted COVID and might have been exposed to it. So far, my Grandmother has tested negative for the virus and it's been helping her chronic joint pain! Will continue to be a lifetime customer❤️ Thanks Man Found Standing for the INCREDIBLE product!",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n"
				}
			]
		},
		"author": "​Ms. Karen D."
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"generic"
		],
		"author": "Karen L.",
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "Karen L. 2020-05-18"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Love the Shiaqga. Keeping me healthy and happy in this whole silly plandemic. Immune modulation is assuredly the key to health."
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"delta": {
			"ops": [
				{
					"insert": "Jeannette W. from Perkasie, PA:",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": " "
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "On 05-28-2020 after ten days on the 2oz Shiaqga Original Formula she emailed, \"Thanks for all your work and your patience with my questions.  I am slowly seeing some improvements, although I have nothing seriously wrong with me.  I assume people with real problems see improvements faster than those of us who are just dealing with middle age!  ;) "
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "Oh, by the way, my 15 year old quickly saw her persistent tonsil stone go away and the other tonsil looks healthy, too!  Thank you!\""
				},
				{
					"insert": "\n"
				}
			]
		},
		"isArticle": false,
		"selectedConditions": [
			"tonsils"
		],
		"author": "Jeannette W."
	},
	{
		"selectedConditions": [
			"respiratory"
		],
		"author": "J. Cech",
		"isArticle": false,
		"delta": {
			"ops": [
				{
					"attributes": {
						"bold": true,
						"color": "#2a2a2a"
					},
					"insert": "J. Cech from Orland Park, IL"
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "\"My curiosity and drive to find new “natural” products for my pets and myself made it easy to try your product Shiaqga.  My 15-year old male Dalmatian, Jorge . . . has a lump on his right side for about two years, and over time, it became larger.  He also has a large lump on the side of his neck which has fluid in it.  "
				},
				{
					"insert": "\n\n"
				},
				{
					"insert": "Being too old and weak for any type of surgery, our hands were tied.  One day after being on Shiaqga for perhaps six weeks, I noticed the hair around his tumor on his side was sticking out.  There was a scab on part of the lump.  The scabbed section was flatter.  A week or two later it reddened, and then another scab appeared on another section.  I was astonished at what I saw.  ",
					"attributes": {
						"color": "#2a2a2a"
					}
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I am happy to report that the lump has gone down by two-thirds its original size.  Also, the large lump on Jorge’s neck went down to about half its size.  During this allergy season, I have not seen Jorge bite his feet or other parts of his body, and he is not taking any steroids or medications for allergies."
				},
				{
					"insert": "\n\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "This product is amazing!  I, too, take Shiaqga as I had part of my lung removed and suffer from upper respiratory infections.  To date, I am happy to report that I became sick once so far while on Shiaqga, but was able to recover without antibiotics!  Shiaqga is a wonderful product that really works.\""
				},
				{
					"insert": "\n"
				}
			]
		}
	},
	{
		"isArticle": false,
		"selectedConditions": [
			"cancer"
		],
		"author": "Alice M.",
		"delta": {
			"ops": [
				{
					"insert": "Alice M. 2019-05-29",
					"attributes": {
						"color": "#2a2a2a",
						"bold": true
					}
				},
				{
					"insert": "\n"
				},
				{
					"attributes": {
						"color": "#2a2a2a"
					},
					"insert": "I have been on your product for a couple months and am very much improved from what I was. I just got back from my oncologist. He is pleased that there is improvement in my health, even though I did not undergo his recommended treatment. I am excited to see the continued healing."
				},
				{
					"insert": "\n"
				}
			]
		}
	}
]
    }
  },
  components: {
    QuillTestimonies
  },
	mounted() {
    window.scrollTo(0,0)
	},
  methods: {
  }
}
</script>

<style scoped></style>
