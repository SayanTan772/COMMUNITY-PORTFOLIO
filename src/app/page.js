'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView();
  const [transform, setTransform] = useState("-100%");
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if(inView) {
      setTransform("0%");
      setAnimation("rotate");
    } else {
      setTransform("-100%");
      setAnimation("");
    }
  }, [inView]);

  return (
    <main className={styles.main}>

    <div className={styles.home}>
    <div className={styles.nav}>
      <Image className={styles.logo}
      src="/logo.jpg"
      alt="not found"
      width={110}
      height={110}
      />
      <p className={styles.p}>Imperio Coders</p>
    </div>

    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.gradient}>Community Portfolio</div>
        <p className={styles.h}>IMPERIO CODERS</p>
        <p className={styles.small}>THINK INNOVATE COLLABORATE CREATE CONNECT</p>
        <div style={{ display: 'flex', marginTop: '28px' }}>
          <button className={styles.btn}>Read More</button>
          <button className={styles.btn1}>Download</button>
        </div>
      </div>
      <Image className={styles.banner_right}
      src="/picture.svg"
      alt="not found"
      width={650}
      height={650}
      />
    </div>
    </div>

    <div className={styles.mission}>
      <div className={styles.left}>
      <div className={styles.gradient}>Community Portfolio</div>
      <p className={styles.h}>What is our misson?</p>
      <p className={styles.para}>At Imperio Coders, our mission is to bridge the gap between emerging tech enthusiasts and the ever-evolving industry. We aim to spread awareness about the latest technologies, offering a platform for innovation, learning, and global corporate connections. Join us and be part of a community where knowledge meets opportunity.</p>
      <div style={{ display: 'flex', marginTop: '28px' }}>
        <button className={styles.btn}>Learn More</button>
      </div>
      </div>
      <div className={styles.right}></div>
    </div>

    <div className={styles.objective}>
      <div className={styles.left}>
      <p className={styles.h}>Our Objectives</p>
      <p className={styles.small} style={{ marginBottom: '16px' }}>Become a part of our community and Grab the opportunity to</p>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/handshake.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px' }}>Get a chance to connect with Industry Professionals. <br/>Gain insights from experienced leaders and mentors.</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/stats.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px' }}>Upskill your Technical Knowledge and skills. <br/>Access exclusive workshops and training sessions.</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/global.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px' }}>Build a Global Network of Industry Professionals. <br/>Collaborate with peers from around the world.</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/certificate.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px' }}>Earn a Globally recignized certification. <br/>Boost your career with verified credentials.</li>
      </ul>
      </div>
      <div className={styles.right}>
      <Image className={styles.poster}
      src="/poster.svg"
      alt="not found"
      width={500}
      height={500}
      />
      </div>
    </div>

    <div className={styles.services}>
      <div className={styles.left}>
      <Image className={styles.poster}
      src="/poster1.svg"
      alt="not found"
      width={500}
      height={500}
      /></div>
      <div className={styles.right}>
      <p className={styles.h}>Our Services</p>
      <p className={styles.small} style={{ marginBottom: '16px' }}>We provide a wide range of services ranging from</p>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/handshake.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px', fontSize: '24px' }}>Competitive Exam Clearance</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/stats.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px', fontSize: '24px' }}>Tailored Web Solutions</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/global.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px', fontSize: '24px' }}>Game Development</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/certificate.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px', fontSize: '24px' }}>Advanced Security Solutions</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Image className={styles.banner}
        src="/stats.svg"
        alt="not found"
        width={92}
        height={92}
        />
        </li>
        <li className={styles.li} style={{ marginLeft: '12px', fontSize: '24px' }}>Business Analysis and Consultancy</li>
      </ul>
      </div>
    </div>

    <div className={styles.section}>
      <p className={styles.h} style={{ fontSize: '64px' }}>Meet our Community <span style={{ color: '#f7b457' }}>Leads</span></p>
      <div className={styles.card_section}>
      <div className={styles.card}>
      <Image style={{ objectFit: 'contain', objectPosition: 'center' }}
      src="/profile.svg"
      alt="not found"
      width={300}
      height={380}
      />
      <p className={styles.name}>Jessica Alba</p>
      <p className={styles.s}>COMMUNITY LEAD</p>
      </div>
      <div className={styles.card}>
      <Image style={{ objectFit: 'contain', objectPosition: 'center' }}
      src="/profile.svg"
      alt="not found"
      width={300}
      height={380}
      />
      <p className={styles.name}>Jessica Alba</p>
      <p className={styles.s}>DESIGNING LEAD</p>
      </div>
      <div className={styles.card}>
      <Image style={{ objectFit: 'contain', objectPosition: 'center' }}
      src="/profile.svg"
      alt="not found"
      width={300}
      height={380}
      />
      <p className={styles.name}>Jessica Alba</p>
      <p className={styles.s}>MARKETING LEAD</p>
      </div>
      <div className={styles.card}>
      <Image style={{ objectFit: 'contain', objectPosition: 'center' }}
      src="/profile.svg"
      alt="not found"
      width={300}
      height={380}
      />
      <p className={styles.name}>Jessica Alba</p>
      <p className={styles.s}>MANAGEMENT LEAD</p>
      </div>
      </div>
    </div>

    <div className={styles.team} ref={ref}>
      <div className={styles.top}>
      <p className={styles.h} style={{ fontSize: '64px', color: '#ffff', textShadow: '0px 0px 24px rgba(0,0,0,0.15)' }}>Meet our Core Team</p>
      </div>
      <div className={styles.overlay} style={{ transform: `translateX(${transform})` }}>
        <div className={styles.card_dia}>
        <Image className={styles.pf} style={{ objectFit: 'contain', objectPosition: 'center' }}
        src="/pf.svg"
        alt="not found"
        width={300}
        height={300}
        />
        <p className={styles.name}>Jessica Alba</p>
        <p className={styles.s} style={{ fontSize: '16px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        <div className={styles.icons}>
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
        </div>
        </div>
        <div className={styles.card_dia}>
        <Image className={styles.pf} style={{ objectFit: 'contain', objectPosition: 'center' }}
        src="/pf.svg"
        alt="not found"
        width={300}
        height={300}
        />
        <p className={styles.name}>Jessica Alba</p>
        <p className={styles.s} style={{ fontSize: '16px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        <div className={styles.icons}>
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
        </div>
        </div>
        <div className={styles.card_dia}>
        <Image className={styles.pf} style={{ objectFit: 'contain', objectPosition: 'center' }}
        src="/pf.svg"
        alt="not found"
        width={300}
        height={300}
        />
        <p className={styles.name}>Jessica Alba</p>
        <p className={styles.s} style={{ fontSize: '16px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        <div className={styles.icons}>
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
        </div>
        </div>
        <div className={styles.card_dia}>
        <Image className={styles.pf} style={{ objectFit: 'contain', objectPosition: 'center' }}
        src="/pf.svg"
        alt="not found"
        width={300}
        height={300}
        />
        <p className={styles.name}>Jessica Alba</p>
        <p className={styles.s} style={{ fontSize: '16px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        <div className={styles.icons}>
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
          <Image className={styles.icon}
          src="/facebook.png"
          alt=""
          width={38}
          height={38}
          />
        </div>
        </div>
      </div>
    </div>

    <div className={styles.booking}>
      <div className={styles.left}>
        <div className={styles.box}></div>
        <div className={styles.img}></div>
      </div>
      <div className={styles.right}>
        <p className={styles.h} style={{ fontSize: '44px' }}>Make a Booking with us</p>
      <form action="" method="post" className={styles.form} autoComplete="off" spellCheck="false" style={{ marginTop: '20px' }}>
      <label className={styles.label} style={{ color: 'rgba(255,255,255,0.87)' }} for="fullname">Full Name:</label><br/>
      <input type="text" className={styles.input_} id="fullname" name="fullname" required /><br/><br/>

      <label className={styles.label} style={{ color: 'rgba(255,255,255,0.87)' }} for="email">Email:</label><br/>
      <input type="email" className={styles.input_} id="email" name="email" required /><br/><br/>

      <label className={styles.label} style={{ color: 'rgba(255,255,255,0.87)' }} for="phone">Phone Number:</label><br/>
      <input type="tel" className={styles.input_} id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /><br/><br/>

      <label className={styles.label} style={{ color: 'rgba(255,255,255,0.87)' }} for="query">Service Type:</label><br/>
      <select id="query" name="query" className={styles.select_} required>
        <option style={{ backgroundColor: '#feb34b' }} value="competitive">Competitive Exam Clearance</option>
        <option style={{ backgroundColor: '#feb34b' }} value="web">Web Solutions</option>
        <option style={{ backgroundColor: '#feb34b' }} value="game">Game Development</option>
        <option style={{ backgroundColor: '#feb34b' }} value="security">Complete Security</option>
        <option style={{ backgroundColor: '#feb34b' }} value="analysis">Complete Business Analysis and Consultancy</option>
      </select><br/><br/>

      <label className={styles.label} style={{ color: 'rgba(255,255,255,0.87)' }} for="message">Message:</label><br/>
      <textarea id="message" className={styles.textarea_} name="message" rows="4" cols="34" required></textarea><br/><br/>

      <input type="submit" value="Submit" className={styles.submit_} />
      </form>
      </div>
    </div>

    <div className={styles.contact} style={{ position: 'relative' }}>
      <div className={styles.overlay} style={{ backgroundColor: 'rgba(0,0,0,0.67)' }}>
      <p className={styles.h} style={{ fontSize: '64px', color: 'rgba(255,255,255,0.67)', textShadow: '0px 0px 24px rgba(0,0,0,0.15)', marginBottom: '38px' }}>Contact Us</p>
      <form action="" method="post" className={styles.form} autoComplete="off" spellCheck="false">
      <label className={styles.label} for="fullname">Full Name:</label><br/>
      <input type="text" className={styles.input} id="fullname" name="fullname" required /><br/><br/>

      <label className={styles.label} for="email">Email:</label><br/>
      <input type="email" className={styles.input} id="email" name="email" required /><br/><br/>

      <label className={styles.label} for="phone">Phone Number:</label><br/>
      <input type="tel" className={styles.input} id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /><br/><br/>

      <label className={styles.label} for="query">Query:</label><br/>
      <select id="query" name="query" className={styles.select} required>
        <option style={{ backgroundColor: '#feb34b' }} value="competitive">Competitive Exam Clearance</option>
        <option style={{ backgroundColor: '#feb34b' }} value="web">Web Solutions</option>
        <option style={{ backgroundColor: '#feb34b' }} value="game">Game Development</option>
        <option style={{ backgroundColor: '#feb34b' }} value="security">Complete Security</option>
        <option style={{ backgroundColor: '#feb34b' }} value="analysis">Complete Business Analysis and Consultancy</option>
      </select><br/><br/>

      <label className={styles.label} for="message">Message:</label><br/>
      <textarea id="message" className={styles.textarea} name="message" rows="4" cols="34" required></textarea><br/><br/>

      <input type="submit" value="Submit" className={styles.submit} />
      </form>
      </div>
    </div>

    </main>
  );
}
