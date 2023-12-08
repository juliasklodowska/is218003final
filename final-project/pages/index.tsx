import DefaultLayout from "@/layouts/default";
import style from "../styles/index.module.css";
// Import your Button component here if you have one

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center items-center py-8 md:py-10">
        {/* Top Smaller Rectangle */}
        <div 
          style={{ backgroundColor: '#F5A524', height: '48px', width: '100%' }}
        />

        {/* Main Rectangle with Image Overlay */}
        <div 
          className="flex justify-center items-center w-full relative" 
          style={{ backgroundColor: '#312107', height: '565px' }}
        >
          {/* Image Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <img 
              src="../images/hero_image.png" 
              alt="Descriptive Image Text"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Text and Button Container */}
          <div className="text-center z-10">
            <h1 className={style.title}>Welcome to Cottage Comfort Café</h1>
            <h4 className={style.subtitle}>Where Every Sip Feels Like Home</h4>
            
            {/* Buttons */}
            <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
              {/* Join our Family Button */}
              <button className="bg-warning text-black font-bold py-3 px-4 rounded-lg text-lg" style={{fontSize: 'lg', fontFamily: 'Georgia'}}>
                Join our Family
              </button>

              {/* See Menu Button */}
              <button className="border-4 border-warning text-warning font-bold py-2 px-4 rounded-lg text-lg" style={{fontSize: 'lg', fontFamily: 'Georgia'}}>
                See Menu
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Smaller Rectangle */}
        <div 
          style={{ backgroundColor: '#F5A524', height: '48px', width: '100%' }}
        />
      </section>
    </DefaultLayout>
  );
}



