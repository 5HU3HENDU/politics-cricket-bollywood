// Seed data for v1 — real events, verified from news reports, 1–2 Nov 2026.
// Format rules: English, concise (each event under ~60 words).
// Politics events: what happened / why it matters / reactions / what's next.
// Cricket events: numbers first (score, stat) / impact / next.
// Bollywood events: the news / the number / why people care.
// Every event carries its source. Roster grows over time; trending order is editorial for v1.

const DATA = {
  updated: "3 Nov 2026",
  verticals: [
    { id: "politics", name: "Politics", tagline: "Who is shaping the argument right now.", color: "#1f3a5f" },
    { id: "cricket", name: "Cricket", tagline: "Form, fitness and selection, in numbers.", color: "#1b6b3a" },
    { id: "bollywood", name: "Bollywood", tagline: "Releases, numbers and buzz.", color: "#7b2d4b" }
  ],
  characters: [
    // ---------------- POLITICS ----------------
    {
      id: "rahul-gandhi", name: "Rahul Gandhi", initials: "RG", vertical: "politics",
      role: "Congress leader, Leader of Opposition",
      why: "Led the Nov 1 Delhi rally demanding the Election Commissioner's resignation.",
      trending: true,
      events: [
        {
          date: "1 Nov 2026",
          title: "Led the INDIA bloc's Delhi rally",
          body: [
            "What: said CEC Gyanesh Kumar must quit and go to jail; called the 2024 polls 'illegal' over alleged voter deletions via SIR.",
            "Why it matters: the SIR fight is now the opposition's main campaign.",
            "Reactions: BJP's Patra replied Kumar was not CEC in 2024, so the charge collapses.",
            "Next: Kharge vowed the campaign runs until Kumar resigns."
          ],
          source: { name: "The Economic Times", url: "https://economictimes.indiatimes.com/news/politics-and-nation/cec-gyanesh-kumar-will-have-to-quit-and-go-to-jail-rahul-gandhi/articleshow/135437239.cms" }
        },
        {
          date: "Oct 2026",
          title: "Marched from Connaught Place to the Supreme Court",
          body: [
            "What: led tens of thousands on a march in Delhi calling for Kumar's resignation.",
            "Why it matters: it set up the Nov 1 rally as the campaign's biggest show of strength yet."
          ],
          source: { name: "Red Ping", url: "https://redping.my/politics/tens-of-thousands-rally-in-delhi-demand-resignation-of-indias-chief-election-commissioner/" }
        }
      ]
    },
    {
      id: "gyanesh-kumar", name: "Gyanesh Kumar", initials: "GK", vertical: "politics",
      role: "Chief Election Commissioner of India",
      why: "The man at the centre of the SIR storm — both sides are fighting over him.",
      trending: true,
      events: [
        {
          date: "1 Nov 2026",
          title: "Became the target of the opposition's Delhi rally",
          body: [
            "What: the INDIA bloc demanded his resignation over the Special Intensive Revision of electoral rolls.",
            "Why it matters: reports put the deletions at over 13 crore names; the Election Commission has rejected the allegations.",
            "Next: the opposition says its campaign runs until he resigns; the BJP is defending the Commission."
          ],
          source: { name: "Red Ping", url: "https://redping.my/politics/tens-of-thousands-rally-in-delhi-demand-resignation-of-indias-chief-election-commissioner/" }
        },
        {
          date: "2025",
          title: "Took over as Chief Election Commissioner",
          body: [
            "What: became CEC in 2025.",
            "Why it matters: the BJP's core rebuttal rests on this — he was not CEC during the 2024 polls."
          ],
          source: { name: "The Economic Times", url: "https://m.economictimes.com/news/politics-and-nation/bjp-counters-india-blocs-rally-with-save-democracy-end-anarchy-march/amp_articleshow/135437171.cms" }
        }
      ]
    },
    {
      id: "narendra-modi", name: "Narendra Modi", initials: "NM", vertical: "politics",
      role: "Prime Minister of India",
      why: "The central target of the opposition rally — and the BJP's counter-march answer.",
      trending: true,
      events: [
        {
          date: "1 Nov 2026",
          title: "Named directly at the opposition rally",
          body: [
            "What: Rahul Gandhi said Modi 'cannot go anywhere' and would face legal action over alleged vote theft.",
            "Why it matters: the attack has moved from the Election Commission to the Prime Minister himself.",
            "Reactions: BJP minister JP Nadda accused the opposition of trying to create unrest."
          ],
          source: { name: "Red Ping", url: "https://redping.my/politics/tens-of-thousands-rally-in-delhi-demand-resignation-of-indias-chief-election-commissioner/" }
        },
        {
          date: "2 Nov 2026",
          title: "BJP answered with nationwide counter-marches",
          body: [
            "What: the party ran 'Loktantra Bachao, Arajakta Hatao' marches across states, led by party chief Nitin Nabin in Rohtak.",
            "Why it matters: the BJP is matching the opposition street-for-street instead of only rebutting on TV.",
            "Reactions: Sambit Patra claimed 40% of Ramlila Maidan was vacant at the opposition rally."
          ],
          source: { name: "The Economic Times", url: "https://m.economictimes.com/news/politics-and-nation/bjp-counters-india-blocs-rally-with-save-democracy-end-anarchy-march/amp_articleshow/135437171.cms" }
        }
      ]
    },
    {
      id: "mamata-banerjee", name: "Mamata Banerjee", initials: "MB", vertical: "politics",
      role: "Chief Minister of West Bengal, AITC",
      why: "Stood with the INDIA bloc on stage at the Delhi rally.",
      trending: false,
      events: [
        {
          date: "1 Nov 2026",
          title: "Joined the Delhi rally's show of opposition unity",
          body: [
            "What: arrived at Ramlila Maidan in an open vehicle with other INDIA bloc leaders and pledged to keep fighting what she called threats to democracy.",
            "Why it matters: her presence put a second big regional party behind the SIR campaign."
          ],
          source: { name: "Red Ping", url: "https://redping.my/politics/tens-of-thousands-rally-in-delhi-demand-resignation-of-indias-chief-election-commissioner/" }
        }
      ]
    },
    {
      id: "akhilesh-yadav", name: "Akhilesh Yadav", initials: "AY", vertical: "politics",
      role: "Samajwadi Party chief",
      why: "Used the Delhi rally to sound the bugle for the UP assembly elections.",
      trending: false,
      events: [
        {
          date: "1 Nov 2026",
          title: "Turned the Delhi rally into a UP election launch",
          body: [
            "What: took a dig at the 'double-engine BJP sarkar' over its 'double-zero defeats' against SP in the recent Varanasi MLC polls.",
            "Why it matters: it signals the SIR campaign doubling as UP election mobilisation."
          ],
          source: { name: "The Economic Times", url: "https://economictimes.indiatimes.com/news/politics-and-nation/cec-gyanesh-kumar-will-have-to-quit-and-go-to-jail-rahul-gandhi/articleshow/135437239.cms" }
        }
      ]
    },
    {
      id: "bhagwant-mann", name: "Bhagwant Mann", initials: "BM", vertical: "politics",
      role: "Chief Minister of Punjab, AAP",
      why: "AAP named its first 40 Punjab candidates — then lost three leaders to the BJP.",
      trending: false,
      events: [
        {
          date: "2 Nov 2026",
          title: "AAP announced its first list of 40 candidates for the 2027 Punjab polls",
          body: [
            "What: Mann will contest from Dhuri; Speaker Kultar Singh Sandhwan from Kotkapura.",
            "Why it matters: AAP is moving first in Punjab while the BJP has not yet named candidates."
          ],
          source: { name: "Mathrubhumi English", url: "https://english.mathrubhumi.com/news/india/three-punjab-aap-leaders-join-bjp-2027-polls-igz9ye4i" }
        },
        {
          date: "2 Nov 2026",
          title: "Three AAP leaders joined the BJP the same day",
          body: [
            "What: Chetan Singh Jouramajra, Harmeet Singh Pathanmajra and Kunwar Vijay Pratap Singh quit AAP and joined the BJP in Delhi.",
            "Why it matters: all three had resigned from the Punjab Assembly, denting AAP weeks after its candidate list.",
            "Reactions: AAP's Saurabh Bhardwaj accused the BJP of taking in leaders it once opposed."
          ],
          source: { name: "News18", url: "https://www.news18.com/india/aap-mlas-join-bjp-big-setback-for-aap-punjab-aap-mlas-resign-10408351.html" }
        }
      ]
    },
    {
      id: "nitin-nabin", name: "Nitin Nabin", initials: "NN", vertical: "politics",
      role: "BJP president",
      why: "Led the BJP's counter-march in Rohtak on the same day as the opposition rally.",
      trending: false,
      events: [
        {
          date: "1 Nov 2026",
          title: "Led the BJP's Rohtak march against the INDIA bloc rally",
          body: [
            "What: marched in Rohtak with Haryana CM Nayab Singh Saini and RLD chief Jayant Chaudhary.",
            "Why it matters: the BJP chief personally fronting the counter shows how seriously the party takes the SIR attack."
          ],
          source: { name: "The Economic Times", url: "https://economictimes.indiatimes.com/news/politics-and-nation/cec-gyanesh-kumar-will-have-to-quit-and-go-to-jail-rahul-gandhi/articleshow/135437239.cms" }
        }
      ]
    },

    // ---------------- CRICKET ----------------
    {
      id: "rishabh-pant", name: "Rishabh Pant", initials: "RP", vertical: "cricket",
      role: "Wicketkeeper-batter, India",
      why: "Failed his fitness test days before the New Zealand Tests.",
      trending: true,
      events: [
        {
          date: "2 Nov 2026",
          title: "Failed a fitness test at the BCCI Centre of Excellence, Bengaluru",
          body: [
            "Numbers: side strain since the Irani Cup in October; at the CoE since 23 Oct; 3,725 runs in 52 Tests at 43.82.",
            "Impact: highly doubtful for the first Test against New Zealand in Wellington from 19 Nov.",
            "Next: retest in two days; if cleared, joins India A in Lincoln from 7 Nov."
          ],
          source: { name: "India.com", url: "https://www.india.com/sports/cricket/bad-news-for-shubman-gill-team-india-before-nz-tests-rishabh-pant-has-failed-fitness-test-8541593/" }
        },
        {
          date: "Oct 2026",
          title: "Picked up the side strain leading Rest of India in the Irani Cup",
          body: [
            "Numbers: injured while captaining Rest of India against Ranji champions Jammu & Kashmir in Srinagar.",
            "Impact: has ruled him out of India A's first two four-day games against New Zealand A."
          ],
          source: { name: "India.com", url: "https://www.india.com/sports/cricket/bad-news-for-shubman-gill-team-india-before-nz-tests-rishabh-pant-has-failed-fitness-test-8541593/" }
        }
      ]
    },
    {
      id: "shubman-gill", name: "Shubman Gill", initials: "SG", vertical: "cricket",
      role: "Captain, India (Test and ODI)",
      why: "Leads India into the New Zealand tour — ODIs first, then Tests.",
      trending: true,
      events: [
        {
          date: "2 Nov 2026",
          title: "Will captain the first three ODIs against New Zealand",
          body: [
            "Numbers: five-match ODI series, 4–15 Nov, starting in Auckland; Shreyas Iyer captains the last two in Gill's absence.",
            "Impact: a split captaincy across one series, with Gill also leading the Tests that follow."
          ],
          source: { name: "News18", url: "https://www.news18.com/cricket/kohli-rohit-in-8-players-out-full-list-of-changes-in-india-squad-for-odi-series-against-new-zealand-ws-l-10408562.html" }
        },
        {
          date: "19 Nov 2026",
          title: "Leads India into the two-Test series in New Zealand",
          body: [
            "Numbers: first Test in Wellington from 19 Nov.",
            "Impact: fitness worries over Pant — and a bowling unit that has missed matches through 2026 — make this a testing tour."
          ],
          source: { name: "India.com", url: "https://www.india.com/sports/cricket/bad-news-for-shubman-gill-team-india-before-nz-tests-rishabh-pant-has-failed-fitness-test-8541593/" }
        }
      ]
    },
    {
      id: "virat-kohli", name: "Virat Kohli", initials: "VK", vertical: "cricket",
      role: "Batter, India (ODI)",
      why: "Back in the ODI squad for the New Zealand series.",
      trending: true,
      events: [
        {
          date: "2 Nov 2026",
          title: "Recalled for the five-match ODI series against New Zealand",
          body: [
            "Numbers: picked for all five ODIs, 4–15 Nov, after missing the T20I series.",
            "Impact: the senior core returns as India switch formats after the 3–2 T20I win."
          ],
          source: { name: "News18", url: "https://www.news18.com/cricket/kohli-rohit-in-8-players-out-full-list-of-changes-in-india-squad-for-odi-series-against-new-zealand-ws-l-10408562.html" }
        }
      ]
    },
    {
      id: "rohit-sharma", name: "Rohit Sharma", initials: "RS", vertical: "cricket",
      role: "Batter, India (ODI)",
      why: "Back alongside Kohli for the New Zealand ODIs.",
      trending: false,
      events: [
        {
          date: "2 Nov 2026",
          title: "Recalled for the five-match ODI series against New Zealand",
          body: [
            "Numbers: picked for all five ODIs, 4–15 Nov, after missing the T20I series.",
            "Impact: both senior batters return together for the format switch."
          ],
          source: { name: "News18", url: "https://www.news18.com/cricket/kohli-rohit-in-8-players-out-full-list-of-changes-in-india-squad-for-odi-series-against-new-zealand-ws-l-10408562.html" }
        }
      ]
    },
    {
      id: "shreyas-iyer", name: "Shreyas Iyer", initials: "SI", vertical: "cricket",
      role: "Batter, India; stand-in ODI captain",
      why: "Won the T20I series as captain — and keeps the ODI captaincy for its last two games.",
      trending: false,
      events: [
        {
          date: "2 Nov 2026",
          title: "Led India to a 3–2 T20I series win over New Zealand",
          body: [
            "Numbers: India lost the final match in Hamilton by 7 wickets but took the series 3–2.",
            "Impact: the win came while blooding new talent — Nitish Kumar Reddy, Naman Dhir and Prince Yadav."
          ],
          source: { name: "Sportskeeda", url: "https://www.sportskeeda.com/cricket/3-india-players-whose-t20i-careers-risk-nz-vs-ind-2026-series-ft-shivam-dube" }
        },
        {
          date: "2 Nov 2026",
          title: "Will captain the last two ODIs against New Zealand",
          body: [
            "Numbers: takes over from Gill for matches four and five of the 4–15 Nov series.",
            "Impact: a second captaincy stint in the same tour — a sign of how much the team trusts him."
          ],
          source: { name: "News18", url: "https://www.news18.com/cricket/kohli-rohit-in-8-players-out-full-list-of-changes-in-india-squad-for-odi-series-against-new-zealand-ws-l-10408562.html" }
        }
      ]
    },
    {
      id: "nitish-kumar-reddy", name: "Nitish Kumar Reddy", initials: "NR", vertical: "cricket",
      role: "Pace-bowling all-rounder, India",
      why: "The youngster whose rise is pushing senior all-rounders out.",
      trending: false,
      events: [
        {
          date: "2 Nov 2026",
          title: "Stood out in the Hamilton T20I decider",
          body: [
            "Numbers: dismissed Tim Seifert for 93 and was India's most economical bowler as New Zealand chased 192 in 18 overs.",
            "Impact: can bowl his full four-over quota and bat in the top six — the profile India now wants."
          ],
          source: { name: "Sportskeeda", url: "https://www.sportskeeda.com/cricket/3-india-players-whose-t20i-careers-risk-nz-vs-ind-2026-series-ft-shivam-dube" }
        },
        {
          date: "2 Nov 2026",
          title: "Picked only for the first ODI against New Zealand",
          body: [
            "Numbers: in the 19-man ODI squad, but available for match one only.",
            "Impact: still being managed carefully despite the T20I breakthrough."
          ],
          source: { name: "News18", url: "https://www.news18.com/cricket/kohli-rohit-in-8-players-out-full-list-of-changes-in-india-squad-for-odi-series-against-new-zealand-ws-l-10408562.html" }
        }
      ]
    },
    {
      id: "vaibhav-sooryavanshi", name: "Vaibhav Sooryavanshi", initials: "VS", vertical: "cricket",
      role: "Batter, India A — aged 15",
      why: "The teenage sensation keeps rising — India A squad, at 15.",
      trending: false,
      events: [
        {
          date: "2 Nov 2026",
          title: "Named in India A's squad for the Rising Stars Asia Cup",
          body: [
            "Numbers: tournament in Doha, 19–29 Nov; Tilak Varma captains, Rajat Patidar is deputy; India A face Nepal on 20 Nov and Pakistan A on 22 Nov.",
            "Impact: his rapid rise through domestic and age-group ranks continues."
          ],
          source: { name: "The Times of India", url: "https://timesofindia.indiatimes.com/sports/cricket/news/abhishek-sharma-vaibhav-sooryavanshi-feature-in-tilak-varma-led-india-a-squad-for-rising-stars-asia-cup/articleshow/135462618.cms" }
        },
        {
          date: "2 Nov 2026",
          title: "Left out of the senior ODI squad",
          body: [
            "Numbers: one of eight players from the T20I squad returning to India after the New Zealand series.",
            "Impact: the seniors return for ODIs; his next stage is the Asia Cup with India A."
          ],
          source: { name: "News18", url: "https://www.news18.com/cricket/kohli-rohit-in-8-players-out-full-list-of-changes-in-india-squad-for-odi-series-against-new-zealand-ws-l-10408562.html" }
        }
      ]
    },
    {
      id: "shivam-dube", name: "Shivam Dube", initials: "SD", vertical: "cricket",
      role: "All-rounder, India (T20I)",
      why: "In the squad, never played — his T20I place is now under threat.",
      trending: false,
      events: [
        {
          date: "2 Nov 2026",
          title: "Did not take the field once on the New Zealand T20I tour",
          body: [
            "Numbers: last 10 T20I innings — 100 runs at 12.50, strike rate 108.69; aged 33, turns 35 by the next World Cup.",
            "Impact: Nitish Kumar Reddy and Naman Dhir now offer the same role with more bowling."
          ],
          source: { name: "Sportskeeda", url: "https://www.sportskeeda.com/cricket/3-india-players-whose-t20i-careers-risk-nz-vs-ind-2026-series-ft-shivam-dube" }
        },
        {
          date: "2 Nov 2026",
          title: "Dropped from the ODI squad against New Zealand",
          body: [
            "Numbers: one of eight T20I squad members not picked for the ODIs.",
            "Impact: a crucial juncture — the team is moving toward younger all-rounders."
          ],
          source: { name: "News18", url: "https://www.news18.com/cricket/kohli-rohit-in-8-players-out-full-list-of-changes-in-india-squad-for-odi-series-against-new-zealand-ws-l-10408562.html" }
        }
      ]
    },

    // ---------------- BOLLYWOOD ----------------
    {
      id: "shah-rukh-khan", name: "Shah Rukh Khan", initials: "SK", vertical: "bollywood",
      role: "Actor — 'King' (releasing 24 Dec 2026)",
      why: "Turned 61 — and the first 'King' song set social media off.",
      trending: true,
      events: [
        {
          date: "2 Nov 2026",
          title: "First song from 'King' released on his 61st birthday",
          body: [
            "News: the romantic track pairs him with Deepika Padukone and began trending within hours of release.",
            "Number: 'King' releases 24 Dec 2026, directed by Siddharth Anand; cast includes Abhishek, Rani and Suhana.",
            "Why people care: an Ed Sheeran–Arijit Singh collaboration, with music by Sachin-Jigar — and fans say the SRK–Deepika pairing recalls 'Om Shanti Om'."
          ],
          source: { name: "The Times of India", url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/king-first-song-out-shah-rukh-khan-deepika-padukones-chemistry-his-chiselled-body-and-ed-sheeran-arijit-singhs-collaboration-send-social-media-into-a-frenzy-watch-video/articleshow/135436041.cms" }
        },
        {
          date: "2 Nov 2026",
          title: "Greeted fans at Mannat after skipping the midnight balcony appearance",
          body: [
            "News: broke from tradition by not appearing at midnight, then met fans later on his birthday.",
            "Why people care: the Mannat birthday crowd is a yearly ritual — this year it came with the 'King' song drop."
          ],
          source: { name: "Bollywood Hungama", url: "https://www.bollywoodhungama.com/features/" }
        }
      ]
    },
    {
      id: "deepika-padukone", name: "Deepika Padukone", initials: "DP", vertical: "bollywood",
      role: "Actor — 'King'",
      why: "Back opposite SRK in the 'King' song — and the nostalgia hit instantly.",
      trending: true,
      events: [
        {
          date: "2 Nov 2026",
          title: "Stars with SRK in the first song from 'King'",
          body: [
            "News: the romantic track's chemistry became the day's biggest talking point.",
            "Why people care: fans say their moments recall 'Om Shanti Om' — their first film together."
          ],
          source: { name: "The Times of India", url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/king-first-song-out-shah-rukh-khan-deepika-padukones-chemistry-his-chiselled-body-and-ed-sheeran-arijit-singhs-collaboration-send-social-media-into-a-frenzy-watch-video/articleshow/135436041.cms" }
        },
        {
          date: "2 Nov 2026",
          title: "Part of 'King's large ensemble cast",
          body: [
            "News: reports list her among the appearances alongside Rani Mukerji and Anil Kapoor.",
            "Number: the film releases 24 Dec 2026 — SRK's first major theatrical release since his 2023 films."
          ],
          source: { name: "Zoom TV", url: "https://www.zoomtventertainment.com/bollywood/kareena-kapoor-hints-at-reunion-with-shah-rukh-khan-in-king-movie-article-156453930" }
        }
      ]
    },
    {
      id: "rani-mukerji", name: "Rani Mukerji", initials: "RM", vertical: "bollywood",
      role: "Actor — 'Mardaani 3', 'King'",
      why: "'Mardaani 3' just topped Netflix India — with all three franchise films in the Top 10.",
      trending: true,
      events: [
        {
          date: "Nov 2026",
          title: "'Mardaani 3' became No. 1 on Netflix India",
          body: [
            "News: all three Mardaani films are in the Top 10 at once — No. 1, No. 5, No. 7.",
            "Number: over Rs 53 crore nett in India, the franchise's best; its Rs 4 crore opening was her biggest solo opening.",
            "Why people care: in her 30th year as a leading lady, another solo success — India's only hit female-cop franchise."
          ],
          source: { name: "Bollywood Hungama", url: "https://www.bollywoodhungama.com/mobile/news/bollywood/mardaani-3-becomes-no-1-movie-netflix-india-3-films-blockbuster-franchise-trend-top-10-films-list/" }
        },
        {
          date: "2 Nov 2026",
          title: "Also in the 'King' ensemble",
          body: [
            "News: named among the cast of SRK's 24 Dec 2026 release, alongside Abhishek Bachchan and Suhana Khan.",
            "Why people care: two big moments in one week — a streaming No. 1 and a Christmas blockbuster."
          ],
          source: { name: "The Times of India", url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/king-first-song-out-shah-rukh-khan-deepika-padukones-chemistry-his-chiselled-body-and-ed-sheeran-arijit-singhs-collaboration-send-social-media-into-a-frenzy-watch-video/articleshow/135436041.cms" }
        }
      ]
    },
    {
      id: "kareena-kapoor", name: "Kareena Kapoor", initials: "KK", vertical: "bollywood",
      role: "Actor",
      why: "One birthday post started 'King' reunion speculation.",
      trending: false,
      events: [
        {
          date: "2 Nov 2026",
          title: "Birthday tribute to SRK sparked 'King' reunion rumours",
          body: [
            "News: shared a dance-themed silhouette image of the two, calling him the 'forever ruler of the kingdom' and inviting him to 'dance together'.",
            "Number: 'King' releases 24 Dec 2026 — neither the actors nor the makers have confirmed any appearance.",
            "Why people care: reports suggest a special song sequence; the post alone was enough to trend."
          ],
          source: { name: "Zoom TV", url: "https://www.zoomtventertainment.com/bollywood/kareena-kapoor-hints-at-reunion-with-shah-rukh-khan-in-king-movie-article-156453930" }
        }
      ]
    },
    {
      id: "ahaan-panday", name: "Ahaan Panday", initials: "AP", vertical: "bollywood",
      role: "Actor — 'Beparwah' (upcoming)",
      why: "YRF announced his next film after the 'Saiyaara' breakthrough.",
      trending: false,
      events: [
        {
          date: "Nov 2026",
          title: "YRF announced 'Beparwah' with Sharvari",
          body: [
            "News: his next film after 'Saiyaara' made him a star, pairing him with Sharvari.",
            "Why people care: it is the first test of whether the 'Saiyaara' moment becomes a career."
          ],
          source: { name: "Baap of Movies", url: "https://baapofmovies.com/trending-news/" }
        }
      ]
    },
    {
      id: "yash", name: "Yash", initials: "Y", vertical: "bollywood",
      role: "Actor — 'Ramayana' (releasing 5 Nov 2026)",
      why: "'Ramayana' releases in days — and the promos are landing daily.",
      trending: false,
      events: [
        {
          date: "2 Nov 2026",
          title: "Vivek Oberoi wished his 'on-screen brother-in-law' ahead of 'Ramayana'",
          body: [
            "News: Oberoi sent public best wishes to Yash ahead of the film's release.",
            "Number: 'Ramayana' releases 5 Nov 2026."
          ],
          source: { name: "Bollywood Hungama", url: "https://www.bollywoodhungama.com/features/" }
        },
        {
          date: "2 Nov 2026",
          title: "'Ramayana' character promos build to the 5 Nov release",
          body: [
            "News: Sai Pallavi's Sita promo took centre stage; Ravie Dubey unveiled his Lakshman poster, calling the role 'an honour and a responsibility'.",
            "Why people care: the biggest Indian film event of the year is three days out."
          ],
          source: { name: "Bollywood Hungama", url: "https://www.bollywoodhungama.com/features/" }
        }
      ]
    }
  ]
};
