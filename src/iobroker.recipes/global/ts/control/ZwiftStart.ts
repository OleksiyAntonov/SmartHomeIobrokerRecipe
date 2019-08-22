export class sceneZwift {
    private Delay(ms: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            setTimeout(resolve, ms);
        })
    }

    private Setup(): void {
        createState(sensorOpenObject.IrlInitiatorId, false);
    }

    public Run() {

        /*
         * AppleTV - start section
        */
        setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.Home", 1, false, 5000, false, function () {
            setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionLeft", 1, false, 500, false, function () {
                setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionLeft", 1, false, 500, false, function () {
                    setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionLeft", 1, false, 500, false, function () {
                        setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionLeft", 1, false, 500, false, function () {
                            setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                    setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                        setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                            setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                                setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                                    setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                                        setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                                            setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                                                setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionUp", 1, false, 500, false, function () {
                                                                    setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionDown", 1, false, 500, false, function () {
                                                                        setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.DirectionDown", 1, false, 500, false, function () {
                                                                            setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.Select", 1, false, 500, false, function () {
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        /*
         * AppleTV - end section
        */

        /*
         * PhilipsTV - start section
        */
        setStateDelayed("harmony.0.Harmony_Hub.Ole-AppleTV.Home", 1, false, 5000, false, function () {
            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.Ambilight", 1, false, 2000, false, function () {
                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionDown", 1, false, 500, false, function () {
                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.Select", 1, false, 500, false, function () {
                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionUp", 1, false, 500, false, function () {
                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionDown", 1, false, 500, false, function () {
                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionDown", 1, false, 500, false, function () {
                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.DirectionDown", 1, false, 500, false, function () {
                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.Select", 1, false, 500, false, function () {

                                                                                // 0x00
                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {

                                                                                                    // 0x05
                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {

                                                                                                                        // 0x0A
                                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {

                                                                                                                                            // 0x0F
                                                                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {

                                                                                                                                                                // 0x14
                                                                                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {

                                                                                                                                                                                    // 0x19
                                                                                                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {

                                                                                                                                                                                                        // 0x1E
                                                                                                                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {
                                                                                                                                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeDown", 1, false, 500, false, function () {

                                                                                                                                                                                                                            // 0x04
                                                                                                                                                                                                                            setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeUp", 1, false, 500, false, function () {
                                                                                                                                                                                                                                setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeUp", 1, false, 500, false, function () {
                                                                                                                                                                                                                                    setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeUp", 1, false, 500, false, function () {
                                                                                                                                                                                                                                        setStateDelayed("harmony.0.Harmony_Hub.Philips_TV.VolumeUp", 1, false, 500);

                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                });
                                                                                                                                                                                                                            });
                                                                                                                                                                                                                        });
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                });
                                                                                                                                                                                                            });
                                                                                                                                                                                                        });
                                                                                                                                                                                                    });
                                                                                                                                                                                                });
                                                                                                                                                                                            });
                                                                                                                                                                                        });
                                                                                                                                                                                    });
                                                                                                                                                                                });
                                                                                                                                                                            });
                                                                                                                                                                        });
                                                                                                                                                                    });
                                                                                                                                                                });
                                                                                                                                                            });
                                                                                                                                                        });
                                                                                                                                                    });
                                                                                                                                                });
                                                                                                                                            });
                                                                                                                                        });
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            });
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

        /*
         * PhilipsTV - end section
        */

    }
}

let sceneZwiftInstance: sceneZwift = new sceneZwift();
sceneZwiftInstance.Run();