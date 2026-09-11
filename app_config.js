var appConfig = {
    "activeCursorStyle": "cursor-target",
    "scenes": {
        "stairway": {
            "title": "Church Stairway Entrance",
            "hfov": 100,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "church_stairway_4k.jpg",
            "hotSpots": [
                {
                    "pitch": 12,
                    "yaw": 18,
                    "type": "scene",
                    "text": "ENTER INTERIOR MAIN HALL",
                    "sceneId": "interior",
                    "div": {}
                },
                {
                    "pitch": -10,
                    "yaw": -25,
                    "type": "scene",
                    "text": "GO TO MUSEUM",
                    "sceneId": "museum",
                    "div": {}
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "ENTER INTERIOR",
                    "sceneId": "interior",
                    "div": {}
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "ENTER INTERIOR",
                    "sceneId": "interior",
                    "div": {}
                }
            ]
        },
        "interior": {
            "title": "Church Interior Hall",
            "hfov": 100,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "church_interior_4k.jpg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": -120,
                    "type": "scene",
                    "text": "EXIT TO STAIRWAY",
                    "sceneId": "stairway"
                },
                {
                    "pitch": 0,
                    "yaw": 60,
                    "type": "scene",
                    "text": "ENTER MEETING ROOM",
                    "sceneId": "meeting_room"
                },
                {
                    "pitch": 0,
                    "yaw": -60,
                    "type": "scene",
                    "text": "ENTER MUSEUM",
                    "sceneId": "museum"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "ENTER MEETING ROOM",
                    "sceneId": "meeting_room"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "ENTER MEETING ROOM",
                    "sceneId": "meeting_room"
                }
            ]
        },
        "meeting_room": {
            "title": "Church Meeting Room",
            "hfov": 100,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "church_meeting_room_4k.jpg",
            "hotSpots": [
                {
                    "pitch": -2,
                    "yaw": 180,
                    "type": "scene",
                    "text": "RETURN TO INTERIOR",
                    "sceneId": "interior"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "RETURN TO INTERIOR",
                    "sceneId": "interior"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "RETURN TO INTERIOR",
                    "sceneId": "interior"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "RETURN TO STAIRS",
                    "sceneId": "stairway"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "RETURN TO STAIRS",
                    "sceneId": "stairway"
                }
            ]
        },
        "museum": {
            "title": "Church Museum",
            "hfov": 100,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "church_museum_4k.jpg",
            "hotSpots": [
                {
                    "pitch": -2,
                    "yaw": 160,
                    "type": "scene",
                    "text": "RETURN TO INTERIOR",
                    "sceneId": "interior"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "RETURN TO INTERIOR",
                    "sceneId": "interior"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "RETURN TO INTERIOR",
                    "sceneId": "interior"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "RETURN TO STAIRS",
                    "sceneId": "stairway"
                },
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "RETURN TO STAIRS",
                    "sceneId": "stairway"
                }
            ]
        }
    }
};
