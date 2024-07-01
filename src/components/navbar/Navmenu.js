
import React, { useEffect, useState, useRef } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

const Navmenu = () => {
    const [allCategory, setAllCategory] = useState([]);
    const [activeCat, setActiveCat] = useState('tour');
    const [loading, setLoading] = useState(true); 
    const intervalRef = useRef(null);
    const router=useRouter()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/packages/package_category_with_city_tge`);
                const response = await data.json();
                setAllCategory(response?.data || []);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);


    const viewAllTours = () => {
          router.push('/all_destination')
    };


    return (
        <div className={styles.nav_menu_main}>
            <div className={`${styles.places_images} desti_images-wrapper destination_nav_button`}>
                <button onClick={viewAllTours} className="view_all_tours_btn">
                    <Image src="/Assets/Icons/places/explore.svg" width={100} height={100} alt="explore_all" />
                    Explore All
                </button>
                <div className="slider-container">
                    {loading ? (
                        <EmptyComponent />
                    ) : (
                        allCategory.length > 0 && (
                            <div className="slider">
                                <div className="slider-content">
                                    {allCategory.slice(0, 9).map((item, ind) => (
                                        <Link key={ind} href={`/destination?city_name=${item?.name}&city_id=${item?.city_id}`}>
                                            <div className="desti-contect-wrapper">
                                                <Image src={item?.icon || "/Assets/Icons/places/explore.svg"} width={100} height={100} alt={item?.name} />
                                                <p>{item?.name}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
                {/* <button onClick={handleNext} className="next-button">
                    <ChevronRightIcon className="h-7 w-5" />
                </button> */}
            </div>
            <div className={`${styles.menu_btn_section} act_tour_buttons`}>
                <Link href={'/'} onClick={() => setActiveCat('tour')} className={activeCat === 'tour' ? `${styles.active}` : `${styles.inactive}`}>
                    TOUR
                </Link>
                <Link
                    href={'/activities'}
                    onClick={() => setActiveCat('activity')}
                    className={activeCat === 'activity' ? `${styles.active}` : `${styles.inactive}`}
                >
                    ACTIVITIES
                </Link>
            </div>
        </div>
    );
};

function EmptyComponent() {
    return (

        <div className="slider-container emptycontainer">
            <div className="slider">
                <div className="slider-content">
                    {Array(9).fill().map((_, index) => (
                        <Link href={'/'} key={index}>
                            <div className="desti-contect-wrapper" >
                                <Image src="/Assets/Icons/places/explore.svg" width={100} height={100} alt="Loading..." />
                                <p>loading...</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navmenu;
